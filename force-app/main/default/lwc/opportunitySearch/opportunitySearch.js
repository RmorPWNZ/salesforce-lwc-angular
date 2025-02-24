import { LightningElement, track } from 'lwc';
import searchOpportunities from '@salesforce/apex/OpportunitySearchController.searchOpportunities';

export default class OpportunitySearch extends LightningElement {
    searchTerm = '';
    minAmount;
    maxAmount;
    opportunities = [];
    error;
    debounceTimeout;

    handleInputChange(event) {
        const field = event.target.name;
        this[field] = event.target.value;
        
        // Clear any existing debounce timer
        window.clearTimeout(this.debounceTimeout);
        // Set a new timer – if no new input occurs in 500ms, trigger the search
        this.debounceTimeout = window.setTimeout(() => {
            this.handleSearch();
        }, 500);
    }

    handleSearch() {
        if (!this.isInputValid) {
            this.opportunities = [];
            this.error = undefined;
            return;
        };

        const min = this.minAmount ? parseFloat(this.minAmount) : null;
        const max = this.maxAmount ? parseFloat(this.maxAmount) : null;
        
        searchOpportunities({
            strParams: JSON.stringify({
                searchTerm: this.searchTerm, 
                minAmount: min, 
                maxAmount: max 
            })
        })
            .then(result => {
                this.opportunities = result;
                this.error = undefined;
            })
            .catch(error => {
                console.error('Error fetching opportunities', error);
                this.error = error?.body?.message || 'Unknown error';
                this.opportunities = [];
            });
    }

    get isInputValid() {
        return this.searchTerm || this.minAmount || this.maxAmount;
    }

    get columns() {
        return [
            { label: 'Name', fieldName: 'Name', type: 'text' },
            { label: 'Stage', fieldName: 'StageName', type: 'text' },
            { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
            { label: 'Amount', fieldName: 'Amount', type: 'currency' }
        ];
    }

    get opportunitiesFound() {
        return this.opportunities.length > 0;
    }
}

