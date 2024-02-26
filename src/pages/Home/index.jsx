import { useEffect, useState } from "react";
import { GetData } from "../../api";
import { Footer, Header, HomeBanner, WhyChoose, OurDog, WhyDog, GettingStarted, MessageFromFounder } from "../../components";



function Home() {

    document.title = "Home Page"

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        (async () => {
            const response = await GetData();
            setLoading(true)
            if (response.data.success === true) {
                setData(response.data.data);
                setLoading(false);
            }
        })()
        return () => {
            setData({})
        }
    }, []);

    return (
        <>
        {loading === true ? <h1>loading please wait</h1> :
            <>
               
                <Header content={data?.header}/>
                <HomeBanner content={data?.section1} />
                <WhyChoose content={data?.section2} />
                <OurDog content={data?.section3} />
                <WhyDog content={data?.section4} />
                <GettingStarted content={data?.section5} />
                <MessageFromFounder /> 
                <Footer  />
            </>
        }
        </>
    )
}

export default Home;