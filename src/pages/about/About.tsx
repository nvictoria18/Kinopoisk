// import Image from "@/assets/2.png";
// import Image1 from "@/assets/1.jpg"
// import Image2 from "@/assets/Logo Instagram.svg"

type AboutProps = {
    count: string;
}


const About = ({ count }: AboutProps) => {
    return (<div>
        {/* <img width="100" height="100" src={Image} />
        <img width="100" height="100" src={Image1} />
        <Image2 width={500} height={500} color={'red'}/>
        <h1>{__PLATFORM__}</h1> */}
        <h2>{count}</h2>
    </div>)
}

export default About;