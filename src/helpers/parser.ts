export const parseName = (str: any) => {
    const array = str.split("/");
    const name = array[1].match(/[a-z]+/g);
    name.pop();
    const capitalize = (str: any) => {
      return str[0].toUpperCase() + str.slice(1);
    };
    return name.map(capitalize).join(" ");
  };

  export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dateDay = date.getDate();
    return dateDay + " " + month + " " + year;
  };