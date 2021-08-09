import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Circle } from "react-konva";
import { WsProvider, ApiPromise } from "@polkadot/api";
import Validator from "./Validator";
import Relay from "./Relay";
import BlockAnimation from "./BlockAnimation";
import axios from "axios";

const fetchValidators = async () => {
	const validators = axios
		.post(`https://polkadot.subscan.io/api/scan/staking/validators`, {})
		.then((validators) => {
			console.log(validators.data.data.list);
			return validators.data.data.list;
		})
		.catch((err) => {
			throw new Error(`Couldn't fetch data from subscan. Error: ${err}`);
		});

	return validators;
};

const Viz = ({ stageWidth, stageHeight }) => {
	const [validators, setValidators] = useState([]);
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	// const [lastAuthor, setLastAuthor] = useState();
	const [authorIndex, setAuthorIndex] = useState();
	useEffect(() => {
		fetchValidators()
			.then((data) => {
				setCount1((count) => count + 1);
				setValidators(data);
			})
			.catch((err) => {
				console.log("unable to fetch data", err);
			});
	}, []);

	useEffect(() => {
		if (validators.length !== 0) {
			setCount2((count) => count + 1);
			const polkaApi = async () => {
				const provider = new WsProvider("wss://rpc.polkadot.io");
				const api = await ApiPromise.create({ provider });
				await api.derive.chain.subscribeNewHeads((block) => {
					// setLastAuthor(block.author.toString());
					const authorIndex = validators.findIndex(
						(p) => p.stash_account_display.address === block.author.toString()
					);
					setAuthorIndex(authorIndex);
					// const start = new Date();
					// const blockNumber = block.number.toString();
				});
			};
			polkaApi();
		}
	}, [validators]);

	// console.log("count1", count1);
	// console.log("count2", count2);
	console.log([...Array(10).keys()]);

	// const stageWidth = window.innerWidth;

	return validators.length === 0 ? (
		<>
			<div className="lds-ripple">
				<div />
				<div />
			</div>
		</>
	) : (
		<Stage width={stageWidth} height={stageHeight}>
			<Layer>
				{/* {[...Array(200).keys()].map((key) => (
					<Circle
						key={key}
						x={Math.random() * stageWidth}
						y={Math.random() * stageHeight}
						radius={1}
						fill="teal"
					/>
				))} */}
				{validators.map((person, index) => (
					<Validator
						key={index}
						validatorAddress={person.valname}
						valinfo={person.valinfo}
						accountIndex={person.accountIndex}
						angle={180 - (index * 360) / validators.length}
						intentions={[]}
						x={
							stageWidth +
							500 *
								Math.cos(
									(90 - 1 - (index * 360) / validators.length) * 0.0174533
								)
						}
						y={
							stageHeight +
							500 *
								Math.sin(
									(90 - 1 - (index * 360) / validators.length) * 0.0174533
								)
						}
						isKusama
					/>
				))}
				<BlockAnimation
					key={authorIndex}
					angle={180 - (authorIndex * 360) / validators.length}
					x1={
						stageWidth / 2 +
						160 *
							Math.cos(
								(90 - (authorIndex * 360) / validators.length) * 0.0174533
							)
					}
					y1={
						stageHeight / 2 +
						160 *
							Math.sin(
								(90 - (authorIndex * 360) / validators.length) * 0.0174533
							)
					}
					x2={
						stageWidth / 2 +
						240 *
							Math.cos(
								(90 - (authorIndex * 360) / validators.length) * 0.0174533
							)
					}
					y2={
						stageHeight / 2 +
						240 *
							Math.sin(
								(90 - (authorIndex * 360) / validators.length) * 0.0174533
							)
					}
				/>
				<Relay x={stageWidth} y={stageHeight} isKusama />
			</Layer>
		</Stage>
	);
};

export default Viz;
