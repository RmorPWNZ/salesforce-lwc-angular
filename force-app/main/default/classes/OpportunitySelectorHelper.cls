public class OpportunitySelectorHelper {
    public static List<Object> buildBindingsForSearchParamsSelector(OpportunitySearchParams params) {
        List<Object> bindings = new List<Object> { '%' + params.searchTerm + '%' };
        if (params.minAmount != null) {
            bindings.add(params.minAmount);
        }
        if (params.maxAmount != null) {
            bindings.add(params.maxAmount);
        }
        return bindings;
    }

    public static String buildConditionForSearchParamsSelector(OpportunitySearchParams params) {
        list<String> result = new List<String> {'Name LIKE '};
        if (params.minAmount != null) {
            result.add(' AND Amount >= ');
        }

        if (params.maxAmount != null) {
            result.add(' AND Amount <= ');
        }

        for (Integer i = 0 ; i < result.size(); i++) {
            result[i] += ':' + 'bind' + i;
        }
        return String.join(result, '');
    }
}