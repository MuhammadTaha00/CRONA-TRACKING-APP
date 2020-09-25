import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchedCountries = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchedCountries();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Golobal</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
