// import Style Sheet
import "./style/main.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

import Dispatcher from "./script/actionCreators/dispatcher";
import { GameAction, Position } from "./script/actionCreators/gameAction";
import Board from "./script/components/Board";

const dispatcher = new Dispatcher();
const firstPosition: [number, number] = [7, 1];

const gameAction: GameAction = new GameAction(dispatcher, firstPosition);
const gameEvent: Bacon.Property<Position, Position> = gameAction.createProperty();

gameEvent.onValue((position: Position) => {
    ReactDOM.render(<Board
        knightPosition={position}
        gameAction={gameAction}
        gameEvent={gameEvent} />,
        document.getElementById("content")
    );
});
