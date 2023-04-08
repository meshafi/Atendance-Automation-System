function todays_date() {
    const curr_date = new Date().toJSON();

    const curr_year = curr_date.slice(0, 4);
    const curr_month = curr_date.slice(5, 7);
    const curr_day = curr_date.slice(8, 10);

    const todays_date = `${curr_day}-${curr_month}-${curr_year}`;
    return todays_date;
}
