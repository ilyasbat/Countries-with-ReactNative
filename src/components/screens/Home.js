import React, {useEffect, useState} from 'react';
import {Button, ScrollView, ActivityIndicator} from 'react-native';
import Layout from '../Layout';
import useFetch from '../../hooks/useFetch';
import {API_ALL_ENDPOINT, WIDGET_TEXT_COLOR} from '../../config';
import CountryItem from '../common/CountryItem';
import MoreButton from '../common/MoreButton';
import SearchBar from '../common/SearchBar';

function Home({navigation}) {
  const data = useFetch(API_ALL_ENDPOINT);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showedData, setShowedData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    if (data.length > 0) {
      setShowed();
    }
  }, [data, page]);
  const setShowed = () => {
    const _showedData = data.filter((d, index) => {
      return index < page * 50;
    });
    setShowedData(_showedData);
    setTotalPage(Math.ceil(data.length / 50));
    setIsLoading(false);
  };
  const setPageNumber = () => {
    if (totalPage > page) {
      setIsLoading(true);
      setTimeout(() => {
        setPage(page + 1);
      }, 500);
    }
  };
  const search = (v) => {
    let value = v.trim().toLowerCase();
    if (!value || value === '') {
      setShowed();
      return;
    }
    if (isLoading) {
      return;
    }
    setTotalPage(0);
    setShowedData(
      data.filter(
        (e) =>
          e.name.toLowerCase().includes(value) ||
          e.nativeName.toLowerCase().includes(value),
      ),
    );
  };
  return (
    <Layout>
      <SearchBar action={search} />
      <ScrollView>
        {showedData.map((d, i) => (
          <CountryItem country={d} key={i} navigation={navigation} />
        ))}
        {totalPage > page && !isLoading && (
          <MoreButton action={setPageNumber} />
        )}
      </ScrollView>
      {isLoading && <ActivityIndicator color={WIDGET_TEXT_COLOR} />}
    </Layout>
  );
}
export default Home;
