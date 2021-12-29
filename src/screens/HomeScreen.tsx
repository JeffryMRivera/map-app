import { BtnMyLocation, Logo, MapView, SearchBar } from "../components"

export const HomeScreen = () => {
    return (
        <div>
            <MapView/>
            <BtnMyLocation/>
            <Logo />
            <SearchBar />
        </div>
    )
}
