import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../Components/Container/styles';
import { Loading, Owner, IssueList } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      repository: {},
      issues: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const repoName = decodeURIComponent(this.props.match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);
    this.setState({ repository: repository.data });
    this.setState({ issues: issues.data });
    this.setState({ loading: false });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <div>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <a href={issue.url}>{issue.title}</a>
                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </div>
              <p>{issue.user.login}</p>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
