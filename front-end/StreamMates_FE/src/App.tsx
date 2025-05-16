import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { HomePage } from './components/HomePage/HomePage';
import { CinemaRecordPage } from './components/Movies/CinemaRecordPage';
import { CinemaRecordDetails } from './components/Movies/CinemaRecordsList/CinemaRecord/CinemaRecordDetails/CinemaRecordDetails';
import { ActorDetails } from './components/Movies/CinemaRecordsList/CinemaRecord/CinemaRecordDetails/CastSection/Actor/ActorDetails/ActorDetails';
import { TV_ChannelsComponent } from './components/TV_Channels/TV_ChannelsComponent';
import { TV_ChannelDetails } from './components/TV_Channels/TV_ChannelsList/TV_Channel/TV_ChannelDetails/TV_ChannelDetails';
import { OrderCinemaRecord } from './components/OrderCinemaRecord/OrderCinemaRecord';
import { OrderEngine } from './components/OrderCinemaRecord/OrderEngine/OrderEngine';

function App() {

	useEffect(() => {
		if (location.pathname == "/") localStorage.removeItem("LAST_CINEMA_RECORDS");
	}, [location.pathname]);

	return (
		<>
			<Routes>
				<Route path="/order-cinema-record" element={<OrderCinemaRecord />} />
				<Route path="/order/:cinemaRecord" element={<OrderEngine />} />

				<Route path="/" element={<HomePage />} />
				<Route path="/actors/:id" element={<ActorDetails />} />

				{/* Movies */}
				<Route path="/movies" element={<CinemaRecordPage />} />
				<Route path="/movies/search/:movie" element={<CinemaRecordPage />} />
				<Route path="/movies/genres/:genre" element={<CinemaRecordPage />} />
				<Route path="/movies/:movie" element={<CinemaRecordDetails />} />
				<Route path="/movies/search/:movie/:id" element={<CinemaRecordDetails />} />

				{/* Series */}
				<Route path="/series" element={<CinemaRecordPage />} />
				<Route path="/series/genres/:genre" element={<CinemaRecordPage />} />
				<Route path="/series/search/:series" element={<CinemaRecordPage />} />
				<Route path="/series/search/:series/:id" element={<CinemaRecordDetails />} />
				<Route path="/series/:series" element={<CinemaRecordDetails />} />


				{/* TV-Channels */}
				<Route path="/tv-channels" element={<TV_ChannelsComponent />} />
				<Route path="/tv-channels/:name" element={<TV_ChannelDetails />} />
			</Routes>
		</>
	)
}

export default App;
