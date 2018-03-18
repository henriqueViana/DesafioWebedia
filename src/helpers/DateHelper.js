class DateHelper {

    static convertStringToDataBR(date) {
        date = date.substring(0,10);
        date = date.split('-');

        return `${date[2]}/${date[1]}/${date[0]}`;
    }
}

export default DateHelper;