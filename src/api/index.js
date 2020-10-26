import axios from 'axios';

const url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=LukeBraz-pok-PRD-0e6527e18-b92fd327&GLOBAL-ID=EBAY-US&keywords=1st+edition+base+set+pokemon&paginationInput.entriesPerPage=3';

export const fetchData = async () => {

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error)
    }
}
