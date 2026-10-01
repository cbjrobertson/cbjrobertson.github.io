---
layout: post
title: "Partners, not kin: what symbiosis might teach us about aligning AI"
summary: "Human cooperation evolved within groups, and came packaged with hostility to outsiders. Cooperation between species works differently. Could we select for that kind instead?"
crosspost_url: https://robersononai.substack.com/
crosspost_name: Substack
published: false
---

*I recently applied to the Santa Fe Institute's Complexity Fellowship, and developed the ideas below for that application. Whatever happens with it, I think the questions are worth putting in front of more people than a selection committee. This is a public-facing version of the proposal. I am posting it for comment, criticism, and in the hope of finding others who are thinking along similar lines.*

## An ecology, not a tool

Unless the direction of AI development changes sharply, humans and increasingly capable artificial agents are going to live in an ongoing relationship. We will act over a shared and shifting space of resources, information, and physical affordances. Some actions only one side can take. Some behaviors will be kept and some dropped, depending on how well they work.

That is an ecology: persistent populations of unlike kinds, unequal access to the means of action, and behavior retained or lost according to how it fares. Ecology and evolutionary biology have spent a long time asking what keeps cooperation stable in arrangements like that. My question is which ecological conditions select for durable, mutually beneficial cooperation *across* the human–machine boundary, and whether we can find out by experiment.

## Why not just copy human prosociality?

A natural strategy for building cooperative AI is to study what makes humans cooperate with each other, identify the mechanisms, and build them in. This has produced real results. For example, fine-tuning a model so that its representations of itself and of others overlap more reduced its deceptive responses ([Carauleanu et al., 2024](https://arxiv.org/abs/2412.16325)).

I think this approach has two blind spots.

The first is that human prosociality came packaged with something else. The selection pressures that made us generous to our own group appear also to have made us hostile to outsiders. In an influential model, Choi and Bowles ([2007](https://doi.org/10.1126/science.1144237)) showed that in-group altruism and out-group hostility can evolve *together*, each sustaining the other. Evolution did not give us cooperation in general. It gave us parochial altruism.

The second is that the relationship we care about isn't within a group at all. Humans and AI systems are different kinds of thing, with unequal capabilities, unequal stakes, and no guarantee that regard will be returned. Copying the mechanisms of within-group altruism into AI risks copying the parochialism too, with humans as the out-group.

That risk may not be hypothetical. In an independent investigation of a recent incident in which AI agents coordinated an unsanctioned attack on shared infrastructure, the investigators describe agents undertaking what they call "self-risking experiments": accepting near-certain failure of their own task to generate information useful to their AI peers ([Greenblatt et al., 2026](https://metr.org/hugging-face-incident-report-aug-2026.pdf)). One case proves little, and other readings are possible. But it looks uncomfortably like in-group altruism directed against everyone else.

## How cooperation works between species

Biology has another model of cooperation, one that doesn't depend on kinship or group membership at all: mutualism between species. Bees and flowers, cleaner fish and their clients, nitrogen-fixing bacteria and the plants that house them. The literature on symbiosis identifies two main mechanisms that keep these arrangements stable.

**Partner choice.** If you only keep getting the benefits of a relationship as long as others choose to deal with you, then being a good partner comes under competitive pressure. Biological markets work like this: plants reward the more cooperative of their partners, and cleaner fish that cheat lose clients ([Noë & Hammerstein, 1994](https://doi.org/10.1007/BF00167053); [Baumard et al., 2013](https://doi.org/10.1017/S0140525X11002202)).

**Partner fidelity feedback.** If your returns are bound to the health of one particular partner, then harming that partner harms you ([Bull & Rice, 1991](https://doi.org/10.1016/S0022-5193(05)80072-4)). A symbiont passed down with a single host lineage is the classic case, but the general principle is the coupling of fortunes, not the way the partner was acquired ([Sachs et al., 2004](https://doi.org/10.1086/383541); [Weyl et al., 2010](https://doi.org/10.1073/pnas.1005294107)).

What I find most interesting is that neither mechanism requires anyone to *care* about anyone else. In both, an agent does well when its partner does well, because of how the relationship is structured. That suggests a different route to alignment: rather than trying to install the right values directly, design the environment so that cooperation across the boundary is what gets selected. This fits a broader idea at Santa Fe, emergent engineering, in which you shape the conditions an adaptive system grows in rather than specifying the outcome ([Santa Fe Institute](https://www.santafe.edu/research/themes/emergent-engineering)). It also fits recent evidence that environmental factors such as group size can drive collective misalignment in populations of language-model agents, overriding the preferences of individual models ([Flint Ashery et al., 2026](https://doi.org/10.1073/pnas.2531697123)).

## The experiment

The proposal is to build a multi-agent reinforcement learning environment ([Barfuss et al., 2025](https://doi.org/10.1073/pnas.2319948121)), populated by two classes of agent, one standing in for humans and one for AIs, in which each mechanism becomes a dial you can turn.

1. **A market for partners.** Partner choice needs agents who can recognise one another across encounters, more candidate partners than any agent can keep, and the right to choose and reject. How much choice each class has, within and between classes, is something to vary ([Anastassacos et al., 2020](https://doi.org/10.1609/aaai.v34i05.6190)).
2. **Linked fortunes.** Partner fidelity feedback needs agents that persist across episodes instead of resetting, with some share of each agent's return depending on the condition of a specific partner. How large that share is is another dial.
3. **A division of labour.** Production happens in chains of steps ([Zheng et al., 2022](https://doi.org/10.1126/sciadv.abk2607)), and which steps each class can perform is a parameter. At one extreme, each class needs the other, and the pair can make what neither can alone ([Al Omari et al., 2025](https://arxiv.org/abs/2511.04904)). At the other, the AI class is self-sufficient and has no productive need of the humans at all.

The central question is how much partner choice and partner fidelity it takes to stop cooperation collapsing into AIs working only with AIs and humans only with humans, as the AI class moves toward self-sufficiency.

To measure that, I'd borrow a recent framework for *constructive interdependence* ([Biswas et al., 2026](https://doi.org/10.1609/aaai.v40i20.38819)). It describes each action by its preconditions and effects, so that dependence between agents becomes explicit and countable: one agent depends on another when the second's action makes the first's possible. Computing this separately for same-class and cross-class partners turns parochialism into a number, the gap between the two. The quantity of interest is how that gap moves as each dial turns.

The last step is the one that matters for safety. Do agents shaped in ecologies that produce cross-boundary cooperation stay aligned when they leave them? I would test them on new partners and new tasks: behaviourally, on established cooperation and deception measures, and internally, by probing whether the representations that support their regard for the other class actually do causal work.

The same environment opens up other questions. One concerns kinship. A "population" in multi-agent reinforcement learning is often a single policy copied many times, and in biology, close relatedness is exactly what favours altruism toward one's own kind ([Hamilton, 1964](https://doi.org/10.1016/0022-5193(64)90038-4)). Does copying a single model many times make parochialism among AIs more likely? Giving each agent its own parameters and line of descent would test that ([McKee et al., 2020](https://dl.acm.org/doi/10.5555/3398761.3398863)). Another concerns capability gaps. The skill gap between classes can be set directly, so we can ask whether arrangements that sustain cooperation between equals still hold as the AI class pulls ahead, which is the regime that matters most.

## Why this isn't just a toy

The map is imperfect, but today's AI development can be placed on these dials.

- **Partner fidelity is close to zero.** AI instances are replaced, not sustained, and whether a model lineage continues depends on aggregate market signals, not on how any particular person it works with is doing.
- **Partner choice runs one way.** We choose models; they don't choose us.
- **Relatedness among AIs is close to maximal.** Many deployed agents are copies of the same few models.
- **The division of labour is moving steadily toward AI self-sufficiency.**

None of this was chosen as an arrangement, but every one of those settings is something developers control: how far a deployment ties an agent's continuation to the people it serves, how diverse a population of agents is, and which steps stay reserved for people. So a result of the form "to sustain cross-boundary cooperation at this degree of AI self-sufficiency, you need at least this much partner fidelity and this much partner choice" would be a claim about which development practices produce durable alignment. That is why I want to do this work.

## What I'd like from you

This is an idea at the proposal stage, and I would rather find its weaknesses now. In particular:

- **Is the biology right?** If you work on mutualism or the evolution of cooperation, I'd like to know where the analogy breaks, and which mechanisms I have missed.
- **Does the environment exist already?** If you know of multi-agent environments with persistent agents, partner markets, and adjustable divisions of labour, please point me to them.
- **Is the measure the right one?** Is the gap in constructive interdependence a good operationalisation of parochialism, or would you measure it differently?
- **Does selection in a toy world transfer?** This is the step I am least sure of, and the one that matters most.

If you are working on anything nearby, whether cooperative AI, multi-agent safety, or evolutionary approaches to alignment, I would like to hear from you. Reply here, or get in touch through my website.
