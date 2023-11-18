import Head from "next/head";
import Dashboard from "./dashboard";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
	return (
		<>
			<Head>
				<title>Autospec</title>
				<meta name="description" content="Vehicle Inspection Report System" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<Dashboard />
			</MainLayout>
		</>
	);
};

export default Home;
