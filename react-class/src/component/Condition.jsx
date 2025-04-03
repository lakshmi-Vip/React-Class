//
function Conditionrender({ isLoggedIn }) {
    if (!isLoggedIn) {
        return <h1>Welcome Back!</h1>;
    } else {
        return <h1>Please Log In</h1>;
    }
}

export function Message({ hasUnreadMessages }) {
    return (
        <div>
            <h1>Hello User!</h1>
            {!hasUnreadMessages && <p>You have unread messages!</p>}
        </div>
    );
}

export default Conditionrender;

