import TapButton from "./TapButton";
import {EXAMPLES} from "../../data";
import {useState} from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
    const [topic, setTopic] = useState();

    function handleTap(tappedButton) {
        setTopic(tappedButton);
    }

    const buttons = [
        <TapButton isSelected={topic === "components"} onClick={() => handleTap('components')}>Components</TapButton>,
        <TapButton isSelected={topic === "jsx"} onClick={() => handleTap('jsx')}>JSX</TapButton>,
        <TapButton isSelected={topic === "props"} onClick={() => handleTap('props')}>Props</TapButton>,
        <TapButton isSelected={topic === "state"} onClick={() => handleTap('state')}>State</TapButton>
    ]


    return (
        <Section title="Examples" id='examples'>
            <Tabs buttons={buttons}>
                {!topic && <p>Please select a topic</p>}
                {topic && (<div id="tab-content">
                    <h3>{EXAMPLES[topic].title}</h3>
                    <p>{EXAMPLES[topic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[topic].code}
                        </code>
                    </pre>
                </div>)}
            </Tabs>
        </Section>
    )
}