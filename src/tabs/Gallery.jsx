import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    total_results: 0,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = async (query, page) => {
    try {
      const { photos, total_results } = await ImageService.getImages(
        query,
        page
      );
      this.setState({ photos, total_results });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  onSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      photos: [],
      total_results: 0,
      error: null,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Grid>
          {this.state.photos.map(photo => {
            return (
              <GridItem key={photo.id}>
                <CardItem color={photo.avg_color}>
                  <img src={photo.src.large} alt={photo.alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {this.state.error && (
          <Text textAlign="center">Sorry. Something went wrong ... 😭</Text>
        )}
      </>
    );
  }
}
