import Paginator from "../Paginator/Paginator";
import User from "./User";
import classes from "./users.module.css";

let Users = ({
  currentPage,
  onPageChanged,
  totalUserCount,
  pageSize,
  ...props
}) => {
  return (
    <div className={classes.userBody}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUserCount}
        pageSize={pageSize}
      />
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
