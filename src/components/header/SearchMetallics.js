import React, { useState, Fragment } from "react";
import { Grid } from '@material-ui/core';
import { metallics } from '../metallics/metallics'
import MetallicItem from '../metallics/MetallicItem.js';


const SearchMetallics = () => {

    const [search, setSearch] = useState("");

    const [item, setItem] = useState([]);

    const onSearchChange = (event) => setSearch(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        setItem(search);

    }

    const filteredItems = metallics.filter(item => {

        const lowerCaseSearch = search.toLowerCase();
        // const hasItemDmc = item.dmc.toString().toLowerCase().includes(lowerCaseSearch);
        const hasItemNumber = (item.number || "").toString().includes(lowerCaseSearch);
        const hasItemColor = (item.color || "").toLowerCase().includes(lowerCaseSearch);
        const hasItemPattern = (item.patterns || "").toLowerCase().includes(lowerCaseSearch);
        const hasItemType = (item.type || "").toLowerCase().includes(lowerCaseSearch);
        return hasItemNumber || hasItemColor || hasItemPattern || hasItemType;

    });

    const allItems = filteredItems.map((item) => {
        return <MetallicItem
            key={`${item.type}${item.number}`}
            number={item.number}
            color={item.color}
            type={item.type}
            patterns={item.patterns}
            image={`https://www.123stitch.com/pictures/${item.type}${item.number}.jpg`} />;
    });

    return (
        <Fragment>
            <div style={{ margin: "75px 500px" }}>
                <form className="form" onSubmit={handleSubmit}>

                    <label style={{ fontSize: "24px" }} className="label" htmlFor="query">Search</label>
                    <input className="input" type="text" name="query"
                        placeholder="number, color, pattern"
                        value={search} onChange={onSearchChange}
                    />
                </form>
            </div>

            <Grid container direction="column">
                <Grid item>
                    <Grid style={{ margin: '10px' }} item container />
                    <Grid item xs={false} sm={2} />
                    {/* on xsmall screens=no gutter  */}
                    <Grid item xs={12}>
                        <Grid item container>
                            {allItems}
                        </Grid>
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>

        </Fragment>
    )
}
export default SearchMetallics;
