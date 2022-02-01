import "./newproduct.css";

export default function NewProduct() {
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductFrom">
        <div className="addProductItem">
          <lable>Image</lable>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <lable>Name</lable>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <lable>Stock</lable>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
