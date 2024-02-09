import { styled } from "@mui/system";
import CardComponent from "../../components/DashboardCard";
import BarChartComponent from "../../components/LineChartComponent";
import PieChartComponent from "../../components/PieChartComponent";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Header = styled("div")({
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.5rem",
});

const CardsContainer = styled("div")({
    width: "100wh",
    display: "flex",
    gap: "1rem",
});

const BasicChartContainer = styled("div")({
    display: "flex",
    gap: "1rem",
    marginTop: "3rem",
});
const ChartContainer = styled("div")({
    height: "27rem",
    width: "48rem",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: " 0px 0px 2px 0px rgba(0,0,0,0.5)",
});

const NextChartContainer = styled("div")({
    height: "27rem",
    width: "23rem",
    backgroundColor: "#fff",
    padding: "1rem",
    display: "flex",
    paddingLeft: "5rem",
    borderRadius: "10px",
    boxShadow: " 0px 0px 2px 0px rgba(0,0,0,0.5)",
});

function Dashboard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        const fetchData = async function () {
            setIsLoading(true);
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "userData"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header>
                <p>Dashboard</p>
            </Header>
            <CardsContainer>
                <CardComponent
                    title={"Number of Users"}
                    data={data.length}
                    isLoading={isLoading}
                />
                <CardComponent
                    title={"Number of Roles"}
                    data={"2"}
                    isLoading={isLoading}
                />
                <CardComponent
                    title={"Number of Users"}
                    data={"20"}
                    isLoading={isLoading}
                />
                <CardComponent
                    title={"Number of Users"}
                    data={"20"}
                    isLoading={isLoading}
                />
            </CardsContainer>
            <BasicChartContainer>
                <ChartContainer>
                    <BarChartComponent />
                </ChartContainer>
                <NextChartContainer>
                    <PieChartComponent />
                </NextChartContainer>
            </BasicChartContainer>
        </div>
    );
}

export default Dashboard;
