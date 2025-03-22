export function convertDate(date) {
    var myDate = new Date(date);
    return myDate.getDate() + "/" + (myDate.getMonth() +1);
}