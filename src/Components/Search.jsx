import React from 'react'
import { Button, Container, TextField , Tab, Tabs} from "@material-ui/core";
import ContentBox from './ContentBox';
import PageControl from './PageControl';
import { useState, useEffect } from 'react';
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  
  const fetchSearchData = async () =>{
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${ type ? "tv" : "movie"}?api_key=80deb4bd2977bc9673a7427effed30de&language=en-US&query=${searchText}&page=${page}`
    );
    const data = await response.json();
    setContent(data.results);
    console.log(data.results);
    setNumOfPages(data.total_pages);
  }
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearchData();
  }, [page, type]);
  
  return (
    <Container>

      <div className="flex my-4 gap-x-2">
        <TextField className="flex-1" label="Search" variant='filled' onChange={(e)=> {setSearchText(e.target.value)}}/>  
        <Button variant="contained" onClick={fetchSearchData}>
          <SearchIcon fontSize="large" />
        </Button>
      </div>

      <div className='flex justify-center'>
        <Tabs value={type} aria-label="disabled tabs example"
          TabIndicatorProps={{style: {backgroundColor: "#7F95A8"}}} 
          onChange={(event, newValue)=> {
            setType(newValue)
            setPage(1)
        }}>
          <Tab label="Search Movies"/>
          <Tab label="Search TV Series"/>
        </Tabs>
      </div>

      <div className="flex flex-wrap justify-around gap-x-2 gap-y-7 pb-5 pt-5">
        {content &&
          content.map((d) => (
            <ContentBox
              key={d.id}
              id={d.id}
              poster={d.poster_path}
              media_type={type ? "tv" : "movie"}
              title={d.title || d.name}
              date={d.first_air_date || d.release_date}
            />
          ))}
          
      </div>

      <PageControl setPage={setPage} numOfPages={numOfPages}/>
      
    </Container>
  )
}

export default Search