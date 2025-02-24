@RestResource(urlMapping='/opportunitysearch/*')
global with sharing class OpportunitySearchRestService {

    @HttpGet
    global static List<Opportunity> search() {
        RestRequest req = RestContext.request;
        String searchTerm = req.params.get('searchTerm');
        String minAmountStr = req.params.get('minAmount');
        String maxAmountStr = req.params.get('maxAmount');

        OpportunitySearchParams params = new OpportunitySearchParams();
        params.searchTerm = searchTerm;
        params.minAmount = (minAmountStr != null) ? Integer.valueOf(minAmountStr) : null;
        params.maxAmount = (maxAmountStr != null) ? Integer.valueOf(maxAmountStr) : null;
 
        return (List<Opportunity> ) new OpportunitySelector()
            .selectOpportunitiesBySearchingParams(params)
            .executeQuery();
    }
}
