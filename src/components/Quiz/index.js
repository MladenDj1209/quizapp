import React, { useEffect, useContext, useState } from 'react';
import Questions from '../../static/questions';
import styles from './styles.js';
import Countdown from 'react-countdown';
import ScoreModal from './scoreModal';

const Quiz = () => {
	const [questions, setQuestions] = useState(Questions);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [countdownTime, setCountdownTime] = useState(5000);
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	const [showOverallScore, setShowOverallScore] = useState(false);

	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCountdownTime(countdownTime)
		}
		else {
			setOverallScoreAndShowModal()
		}
	}

	const setOverallScoreAndShowModal = () => {
		setShowOverallScore(true);
		handleShow()
	}

	return (
		<div className='app'>
			{showOverallScore ? (
				<div style={styles.scoreSection}>
					<ScoreModal
						showModal={show}
						score={score}
						totalCount={questions.length}
					/>
				</div>
			) : (
				<>
					<div style={styles.questionSection}>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
					</div>
					<div style={styles.answerSection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={styles.answerOption} onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<>
						<Countdown
							date={Date.now() + countdownTime}
							onComplete={setOverallScoreAndShowModal}
						/>
					</>
				</>
			)}
		</div>
	);
}

export default Quiz;