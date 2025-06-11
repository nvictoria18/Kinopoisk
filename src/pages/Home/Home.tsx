import Navbar from "@/widgets/Navbar/ui/Navbar";

type HomeProps = {
    count: number;
}

const Home = () => {
    return (
    <div>
        <Navbar isPermission={true} />

    </div>)
}

export default Home;