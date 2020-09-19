import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, RepositoryInfo, Issues } from './styles'; 

import logo from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logo} alt="Github Repositório"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/22237782?s=460&u=3cfcb0c3d4b454ffcab6c0c7c35814585cc545d1&v=4" 
                    alt="Miguel"/>
                    <div>
                        <strong>joaomiguel789/react</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1080</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
        
            <Issues>
                <Link to="asdasd">
                    <div>
                        <strong>asdasd</strong>
                        <p>asdasd</p>
                    </div>
                         <FiChevronRight size={20} />
                </Link>
            </Issues>
        
        </>
    );
} 

export default Repository;