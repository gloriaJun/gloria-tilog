import React from 'react';

import Content from './index';

export default {
  title: 'Content',
  component: Content,
};

export const normal = (): JSX.Element => <Content>This is text.</Content>;

export const longText = (): JSX.Element => (
  <Content>
    Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms hurled
    insults at one another Friday, as their legal battle over whether to mandate
    masks in the state’s capital city entered its second day. During dueling
    appearances at a Capitol news briefing and in an interview with CNN, the
    Republican governor and the Democratic mayor both accused the other’s office
    of playing politics amid a pandemic that continues to ravage communities
    across Georgia. Updating members of the media on the state’s coronavirus
    response, Kemp defended his decision to sue Atlanta’s mayor and city council
    in an effort to block local officials there from enforcing an order
    requiring residents to wear a mask in public. “Mayor Bottoms’ mask mandate
    cannot be enforced, but her decision to shutter businesses and undermine
    economic growth is devastating,” Kemp told reporters in Atlanta, likening
    his administration’s legal action to “sending in the National Guard.” “I
    refuse to sit back and watch as disastrous policies threaten the lives and
    livelihoods of our citizens,” he said. “We will fight to stop reckless
    actions and put people over pandemic politics.” Meanwhile, on CNN, Bottoms
    dismissed Kemp’s unfolding criticism as “propaganda” and “completely
    inaccurate,” and called the escalating controversy over face coverings “very
    bizarre, quite frankly.” Bottoms also charged that the governor’s lawsuit
    was politically motivated, remarking that she did not “think it was
    happenstance” that Kemp pursued litigation one day after President Donald
    Trump visited Atlanta. Furthermore, Bottoms alleged the lawsuit represented
    an act of “personal retaliation.” She noted that other Georgia cities had
    imposed similar mask orders, and said the governor “sued us personally. He
    did not sue the city of Atlanta. He filed suit against myself and our city
    council personally.” The high-profile clash between two of Georgia’s top
    leaders came after Kemp issued a statewide order Wednesday banning local
    mask mandates. But Bottoms said her city’s order requiring face coverings
    would continue to apply, provoking Kemp to file his lawsuit in state court
    Thursday. The feud has served to further elevate the national profile of
    Bottoms, who revealed this month that she had tested positive for Covid-19
    and has attained greater public prominence due to reports that she is being
    vetted for the role of running mate to presumptive Democratic presidential
    nominee Joe Biden. As for Kemp, the rift with Bottoms has dredged up earlier
    criticisms of his management of Georgia’s coronavirus outbreak. The governor
    lifted his stay-at-home order at the end of April after memorably admitting
    earlier in the month that he had just learned asymptomatic infected people
    could spread the disease, and state officials were caught misrepresenting
    Covid-19 reporting data in May. Kemp’s latest opposition to Bottoms’ order,
    at a time when even the Trump administration is encouraging deference to
    local coronavirus directives, has drawn significant criticism. It also
    diverges from the approaches of Republican governors in Southern states
    including Alabama, Arkansas and Texas, who have issued statewide mask
    mandates in recent days. Kemp’s own lieutenant governor, Republican Geoff
    Duncan, appeared reluctant to offer a full-throated defense of the
    governor’s lawsuit Friday, instead repeatedly emphasizing the importance of
    mask-wearing. “I hope we move past it,” Duncan told CNN of the ongoing
    controversy, adding that the “whole conversation around the mandate doesn’t
    help us get through this. It becomes a distraction [from] the health and
    well-being of 11 million Georgians.” Although elected officials averse to
    mask mandates argue Americans should be able to make their own assessments
    regarding their safety, public health experts have warned that Covid-19
    remains a highly contagious disease — and that those not wearing masks risk
    infecting other, potentially more vulnerable, people.
  </Content>
);
