import { WrapperNav } from "./styled";
import useGithub from "../../hooks/githubHooks";


function Nav() {

    const { githubState, getUserRepos } = useGithub();

    const loadingRepos = () => {
        const username = githubState.username;

        if (!(username.length > 0)) return;

        return getUserRepos(username);
    }
    
    console.log(githubState.repositories)
    return (
        <WrapperNav>
            <button onClick={loadingRepos}>Repositories</button>
            <button>Starred</button>
        </WrapperNav>
    )
}

export default Nav;