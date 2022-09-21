import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";
import numberWithCommas from "../../utils/thousandSeparator";

export default function Transaction({ transaction }) {
  const { name, amount, type, id } = transaction || {};

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {numberWithCommas(amount)}</p>
          <button onClick={handleEdit} className="link">
            <img className="icon" src={editImage} alt="Edit" />
          </button>
          <button onClick={handleDelete} className="link">
            <img className="icon" src={deleteImage} alt="Delete" />
          </button>
        </div>
      </li>
    </>
  );
}
