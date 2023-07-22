import Image from "next/image";

const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

const getUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
};

export default async function ListOfPosts() {
    // const posts = await getPostsData();
    const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);

    return (
        <div className="p-4">
            <h1 className="text-2xl">POSTS</h1>
            {posts.map((post: any) => {
                return <p>{post.title}</p>;
            })}
            <h1 className="text-2xl">USERS</h1>
            {users.map((user: any) => {
                return <p>{user.name}</p>;
            })}
        </div>
    );
}
