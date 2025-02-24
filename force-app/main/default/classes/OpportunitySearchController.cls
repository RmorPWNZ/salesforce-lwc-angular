public with sharing class OpportunitySearchController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> searchOpportunities(String strParams) {
        OpportunitySearchParams params = (OpportunitySearchParams) JSON.deserialize(strParams, OpportunitySearchParams.class);

        return (List<Opportunity> ) new OpportunitySelector()
            .selectOpportunitiesBySearchingParams(params)
            .executeQuery();
    }
}
