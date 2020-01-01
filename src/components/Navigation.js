/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { connect } from '@cerebral/react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';

const LOCATIONS = [
  "Location 1",
  "Location 2",
  "Location 3",
];

const Navigation = connect(
  {
    //
  },
  (/*{
    //
  }*/) => {
    return (
      <div
        id="navigation"
        css={css`
          height: 100%;
          width: 100%;

          display: grid;
          grid-template-rows: 9fr 1fr;
          grid-template-areas:
            "locations"
            "add";
        `}
      >

        <div
          css={css`
            height: 100%;
            width: 100%;
            grid-area: locations;
          `}
        >
          {
            LOCATIONS.map((loc) => {
              return (
                <Card>
                  <CardContent>
                    <h5>{loc}</h5>
                  </CardContent>
                </Card>
              );
            })
          }
        </div>

        <Fab
          color="primary"
          css={css`
            grid-area: add;
            place-self: center end;
          `}
        >
          <Add />
        </Fab>
      </div>
    );
  }
);

export default Navigation;
