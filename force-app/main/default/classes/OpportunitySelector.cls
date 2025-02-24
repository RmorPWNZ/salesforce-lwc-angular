public inherited sharing class OpportunitySelector extends SObjectSelector {

    public OpportunitySelector() {
        super();
    }

    public OpportunitySelector(Boolean enforceCRUD, Boolean enforceFLS) {
        super(enforceCRUD, enforceFLS);
    }

    public OpportunitySelector(String relationshipName, SObjectType relationshipBase) {
        super(relationshipName, relationshipBase);
    }

    public override Schema.SObjectType getSObjectType()  {
        return Opportunity.SObjectType;
    }

    public override List<Schema.SObjectField> getDefaultFieldList() {
        return new List<Schema.SObjectField> {
            Opportunity.Id,
            Opportunity.AccountId,
            Opportunity.Name,
            Opportunity.Type,
            Opportunity.Amount,
            Opportunity.OwnerId,
            Opportunity.CloseDate
        };
    }

    public List<String> selectDefaultRelationshipFields() {
        return new List<String> {
            'Account.Name',
            'Account.OwnerId'
        };
    }

    public QueryFactory selectOpportunitiesByName(String name) {
        return newQueryFactory()
            .setFactoryName('selectOpportunitiesByName')
            .withSelectorFieldsIncluded()
            .selectFields(getDefaultFieldList())
            .withoutSelectorOrderByIncluded()
            .setCondition('Name LIKE :bind0')
            .setQueryBindings(new List<Object> { '%' + name + '%'});
    }

    public QueryFactory selectOpportunitiesBySearchingParams(OpportunitySearchParams params) {
        return newQueryFactory()
            .setFactoryName('selectOpportunitiesBySearchingParams')
            .withSelectorFieldsIncluded()
            .selectFields(getDefaultFieldList())
            .withoutSelectorOrderByIncluded()
            .setCondition(OpportunitySelectorHelper.buildConditionForSearchParamsSelector(params))
            .setQueryBindings(OpportunitySelectorHelper.buildBindingsForSearchParamsSelector(params));
    }
}
