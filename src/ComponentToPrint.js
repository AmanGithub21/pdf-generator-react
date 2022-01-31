import React from "react";

import "./ComponentToPrint.css";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div className="print-component-container" ref={ref}>
      <h1>Hello My name is {props.name}. </h1>

      <h3>
        And you like to <i>{props.likes}</i>{" "}
      </h3>

      <p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pauca mutat
          vel plura sane; <i>Tria genera bonorum;</i> Si quicquam extra virtutem
          habeatur in bonis. Hoc ille tuus non vult omnibusque ex rebus
          voluptatem quasi mercedem exigit. Qua tu etiam inprudens utebare non
          numquam.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Duo Reges: constructio interrete.
          </a>{" "}
        </p>

        <p>
          Tu enim ista lenius, hic Stoicorum more nos vexat. Tantum dico, magis
          fuisse vestrum agere Epicuri diem natalem, quam illius testamento
          cavere ut ageretur. Tantum dico, magis fuisse vestrum agere Epicuri
          diem natalem, quam illius testamento cavere ut ageretur. Septem autem
          illi non suo, sed populorum suffragio omnium nominati sunt. Aliam vero
          vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax fueris,
          concedas necesse est.{" "}
        </p>

        <p>
          Nunc omni virtuti vitium contrario nomine opponitur. Nec tamen ullo
          modo summum pecudis bonum et hominis idem mihi videri potest. Nulla
          erit controversia.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Aliter autem vobis placet.
          </a>{" "}
          Re mihi non aeque satisfacit, et quidem locis pluribus.{" "}
        </p>

        <p>
          Indicant pueri, in quibus ut in speculis natura cernitur.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Quis enim redargueret?
          </a>{" "}
          Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant
          in maiorem. Si enim sapiens aliquis miser esse possit, ne ego istam
          gloriosam memorabilemque virtutem non magno aestimandam putem. Quid
          censes in Latino fore?{" "}
          <a href="http://loripsum.net/" target="_blank">
            Quis istud, quaeso, nesciebat?
          </a>{" "}
          Positum est a nostris in iis esse rebus, quae secundum naturam essent,
          non dolere;{" "}
        </p>

        <p>
          Quid ait Aristoteles reliquique Platonis alumni? Tibi hoc incredibile,
          quod beatissimum. Suo genere perveniant ad extremum; Itaque primos
          congressus copulationesque et consuetudinum instituendarum voluntates
          fieri propter voluptatem; Cur id non ita fit?{" "}
          <mark>Explanetur igitur.</mark>{" "}
          <i>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</i>{" "}
        </p>

        <p>
          Sed tamen intellego quid velit.{" "}
          <b>De hominibus dici non necesse est.</b> Utram tandem linguam nescio?
          Nemo igitur esse beatus potest.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Vitae autem degendae ratio maxime quidem illis placuit quieta.
          </a>{" "}
          Quid turpius quam sapientis vitam ex insipientium sermone pendere? Cum
          id fugiunt, re eadem defendunt, quae Peripatetici, verba. Non autem
          hoc: igitur ne illud quidem.{" "}
        </p>

        <p>
          Quia dolori non voluptas contraria est, sed doloris privatio. De
          hominibus dici non necesse est. <b>Ut aliquid scire se gaudeant?</b>{" "}
          <a href="http://loripsum.net/" target="_blank">
            Recte, inquit, intellegis.
          </a>{" "}
          Sed eum qui audiebant, quoad poterant, defendebant sententiam suam.
          Sed tamen intellego quid velit. Non potes, nisi retexueris illa.{" "}
        </p>

        <p>
          <b>De vacuitate doloris eadem sententia erit.</b> At miser, si in
          flagitiosa et vitiosa vita afflueret voluptatibus. Qui potest igitur
          habitare in beata vita summi mali metus?{" "}
          <i>Omnes enim iucundum motum, quo sensus hilaretur.</i>{" "}
          <b>Quae cum dixisset, finem ille.</b>{" "}
          <mark>Restatis igitur vos;</mark> Cupit enim dícere nihil posse ad
          beatam vitam deesse sapienti.{" "}
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pauca mutat
          vel plura sane; <i>Tria genera bonorum;</i> Si quicquam extra virtutem
          habeatur in bonis. Hoc ille tuus non vult omnibusque ex rebus
          voluptatem quasi mercedem exigit. Qua tu etiam inprudens utebare non
          numquam.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Duo Reges: constructio interrete.
          </a>{" "}
        </p>

        <p>
          Tu enim ista lenius, hic Stoicorum more nos vexat. Tantum dico, magis
          fuisse vestrum agere Epicuri diem natalem, quam illius testamento
          cavere ut ageretur. Tantum dico, magis fuisse vestrum agere Epicuri
          diem natalem, quam illius testamento cavere ut ageretur. Septem autem
          illi non suo, sed populorum suffragio omnium nominati sunt. Aliam vero
          vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax fueris,
          concedas necesse est.{" "}
        </p>

        <p>
          Nunc omni virtuti vitium contrario nomine opponitur. Nec tamen ullo
          modo summum pecudis bonum et hominis idem mihi videri potest. Nulla
          erit controversia.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Aliter autem vobis placet.
          </a>{" "}
          Re mihi non aeque satisfacit, et quidem locis pluribus.{" "}
        </p>

        <p>
          Indicant pueri, in quibus ut in speculis natura cernitur.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Quis enim redargueret?
          </a>{" "}
          Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant
          in maiorem. Si enim sapiens aliquis miser esse possit, ne ego istam
          gloriosam memorabilemque virtutem non magno aestimandam putem. Quid
          censes in Latino fore?{" "}
          <a href="http://loripsum.net/" target="_blank">
            Quis istud, quaeso, nesciebat?
          </a>{" "}
          Positum est a nostris in iis esse rebus, quae secundum naturam essent,
          non dolere;{" "}
        </p>

        <p>
          Quid ait Aristoteles reliquique Platonis alumni? Tibi hoc incredibile,
          quod beatissimum. Suo genere perveniant ad extremum; Itaque primos
          congressus copulationesque et consuetudinum instituendarum voluntates
          fieri propter voluptatem; Cur id non ita fit?{" "}
          <mark>Explanetur igitur.</mark>{" "}
          <i>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</i>{" "}
        </p>

        <p>
          Sed tamen intellego quid velit.{" "}
          <b>De hominibus dici non necesse est.</b> Utram tandem linguam nescio?
          Nemo igitur esse beatus potest.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Vitae autem degendae ratio maxime quidem illis placuit quieta.
          </a>{" "}
          Quid turpius quam sapientis vitam ex insipientium sermone pendere? Cum
          id fugiunt, re eadem defendunt, quae Peripatetici, verba. Non autem
          hoc: igitur ne illud quidem.{" "}
        </p>

        <p>
          Quia dolori non voluptas contraria est, sed doloris privatio. De
          hominibus dici non necesse est. <b>Ut aliquid scire se gaudeant?</b>{" "}
          <a href="http://loripsum.net/" target="_blank">
            Recte, inquit, intellegis.
          </a>{" "}
          Sed eum qui audiebant, quoad poterant, defendebant sententiam suam.
          Sed tamen intellego quid velit. Non potes, nisi retexueris illa.{" "}
        </p>

        <p>
          <b>De vacuitate doloris eadem sententia erit.</b> At miser, si in
          flagitiosa et vitiosa vita afflueret voluptatibus. Qui potest igitur
          habitare in beata vita summi mali metus?{" "}
          <i>Omnes enim iucundum motum, quo sensus hilaretur.</i>{" "}
          <b>Quae cum dixisset, finem ille.</b>{" "}
          <mark>Restatis igitur vos;</mark> Cupit enim dícere nihil posse ad
          beatam vitam deesse sapienti.{" "}
        </p>
      </p>
    </div>
  );
});
