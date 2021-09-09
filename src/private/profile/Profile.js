export default function Profile({
    username,
    name,
    bio,
    location,
    profile_picture,
}) {
    return (
        <div id="profile-container">
            <table>
                <tr>
                    <th>
                        Username:
                    </th>
                    <td>
                        {username}
                    </td>
                </tr>
                <tr>
                    <th>
                        Name:
                    </th>
                    <td>
                        {name}
                    </td>
                </tr>
                <tr>
                    <th>
                        Location:
                    </th>
                    <td>
                        {location}
                    </td>
                </tr>
                <tr>
                    <th>
                        Bio:
                    </th>
                    <td>
                        {bio}
                    </td>
                </tr>
            </table>
        </div>
    )
}
