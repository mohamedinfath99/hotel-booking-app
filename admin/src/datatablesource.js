export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" } alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },

  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 120,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  }
];



export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },

  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "distance",
    headerName: "distance",
    width: 230,
  },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "desc",
    width: 230,
  },
  {
    field: "miniDesc",
    headerName: "miniDesc",
    width: 230,
  },
  {
    field: "rating",
    headerName: "rating",
    width: 230,
  },
  {
    field: "cheapestPrice",
    headerName: "cheapestPrice",
    width: 230,
  },
  {
    field: "featured",
    headerName: "featured",
    width: 230,
  }

];



export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "titlt",
    headerName: "Title",
    width: 100,
  },

  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  }
];



