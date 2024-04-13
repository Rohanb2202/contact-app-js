import { useState } from "react";
import { PacmanLoader, RingLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#00b5ff",
};

const Spinner = (isLoading) => {

    return (
        <div className="sweet-loading">

            <RingLoader
                color='#00b5ff'
                loading={isLoading}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;