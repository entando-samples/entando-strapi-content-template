import React, { Component } from 'react'
import { getSanitizedCollectionTypes } from '../helpers/helpers';
import { FormattedMessage } from "react-intl";
export default class TemplateSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionType: [],
            selectedCollectionType: "All"
        };
    }

    componentDidMount = async () => {
        this.getCollectionType();
    }

    getCollectionType = async () => {
        //Remove later
        // const { data: { data } } = await getCollectionTypes();
        // if (data.length) {
        //     const collectionListData = data.filter((el) => el.uid.startsWith('api::') &&  el.isDisplayed);
        //     this.setState({ collectionType: collectionListData });
        // }
        const sanitizedCollectionTypes = await getSanitizedCollectionTypes();
        this.setState({ collectionType: sanitizedCollectionTypes });
    }

    collectionTypeOnChange = (event) => this.setState({ selectedCollectionType: event.target.value });
    collectionTypeOnClick = () => {
        this.props.collectionTypeOnChange(this.state.selectedCollectionType);
        this.props.setLoading(true);
    };

    render() {
        return (
            <div className="well tw-search-well-div">
                <div className="tw-search-container-div">
                    <div className="container-fluid">
                        <div className="show-grid row">
                        <div className="col-lg-1 tw-search-label"><FormattedMessage id="app.search" /></div>
                            <div className="col-lg-10"></div>
                        </div>
                        <div className="show-grid row tw-search-show-grid-row-div">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-1 tw-type-label-div">
                                <FormattedMessage id="app.type" />
                            </div>
                            <select onChange={this.collectionTypeOnChange} className="col-lg-7 tw-search-select" name="cars" id="cars">
                                <FormattedMessage id='app.all' >
                                    {(message) => <option value='All'>{message}</option>}
                                </FormattedMessage>
                                {this.state.collectionType.map(el => <option key={el.displayName} value={el.displayName}>{el.displayName}</option>)}
                            </select>
                        </div>
                        <div className="show-grid row tw-search-btn-mainDiv">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-4 tw-search-btn-col-lg-4-div">
                                <button onClick={this.collectionTypeOnClick} className="btn btn-primary"><FormattedMessage id="app.search" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
