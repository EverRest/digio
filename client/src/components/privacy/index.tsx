import React, { ReactElement } from "react";
import PageWrapper from "../../ui/pageWrapper/PageWrapper";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Privacy = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <PageWrapper title={t("footer.privacyTitle")} breadcrumbs={[]}>
      <Grid container justifyContent={"start"}>
        <Grid item xs={12} mb={2}>
          <Typography>
            Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
            Datenschutz hat einen besonders hohen Stellenwert für die
            Geschäftsleitung der FCR Innovation GmbH. Eine Nutzung der
            Internetseiten der FCR Innovation GmbH ist grundsätzlich ohne jede
            Angabe personenbezogener Daten möglich. Sofern eine betroffene
            Person besondere Services unseres Unternehmens über unsere
            Internetseite in Anspruch nehmen möchte, könnte jedoch eine
            Verarbeitung personenbezogener Daten erforderlich werden. Ist die
            Verarbeitung personenbezogener Daten erforderlich und besteht für
            eine solche Verarbeitung keine gesetzliche Grundlage, holen wir
            generell eine Einwilligung der betroffenen Person ein.
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            Die Verarbeitung personenbezogener Daten, beispielsweise des Namens,
            der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen
            Person, erfolgt stets im Einklang mit der
            Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
            FCR Innovation GmbH geltenden landesspezifischen
            Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte
            unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der
            von uns erhobenen, genutzten und verarbeiteten personenbezogenen
            Daten informieren. Ferner werden betroffene Personen mittels dieser
            Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            Die FCR Innovation GmbH hat als für die Verarbeitung
            Verantwortlicher zahlreiche technische und organisatorische
            Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über
            diese Internetseite verarbeiteten personenbezogenen Daten
            sicherzustellen. Dennoch können Internetbasierte Datenübertragungen
            grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter
            Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es
            jeder betroffenen Person frei, personenbezogene Daten auch auf
            alternativen Wegen, beispielsweise telefonisch, an uns zu
            übermitteln.
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>1. Begriffsbestimmungen</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die Datenschutzerklärung der FCR Innovation GmbH beruht auf den
              Begrifflichkeiten, die durch den Europäischen Richtlinien- und
              Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
              (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl
              für die Öffentlichkeit als auch für unsere Kunden und
              Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
              gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten
              erläutern.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Wir verwenden in dieser Datenschutzerklärung unter anderem die
              folgenden Begriffe:
            </Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>a) personenbezogene Daten</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Personenbezogene Daten sind alle Informationen, die sich auf
                  eine identifizierte oder identifizierbare natürliche Person
                  (im Folgenden „betroffene Person“) beziehen. Als
                  identifizierbar wird eine natürliche Person angesehen, die
                  direkt oder indirekt, insbesondere mittels Zuordnung zu einer
                  Kennung wie einem Namen, zu einer Kennnummer, zu
                  Standortdaten, zu einer Online-Kennung oder zu einem oder
                  mehreren besonderen Merkmalen, die Ausdruck der physischen,
                  physiologischen, genetischen, psychischen, wirtschaftlichen,
                  kulturellen oder sozialen Identität dieser natürlichen Person
                  sind, identifiziert werden kann.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>b) betroffene Person</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Betroffene Person ist jede identifizierte oder
                  identifizierbare natürliche Person, deren personenbezogene
                  Daten von dem für die Verarbeitung Verantwortlichen
                  verarbeitet werden.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>c) Verarbeitung</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                  Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe
                  im Zusammenhang mit personenbezogenen Daten wie das Erheben,
                  das Erfassen, die Organisation, das Ordnen, die Speicherung,
                  die Anpassung oder Veränderung, das Auslesen, das Abfragen,
                  die Verwendung, die Offenlegung durch Übermittlung,
                  Verbreitung oder eine andere Form der Bereitstellung, den
                  Abgleich oder die Verknüpfung, die Einschränkung, das Löschen
                  oder die Vernichtung.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>d) Einschränkung der Verarbeitung</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Einschränkung der Verarbeitung ist die Markierung
                  gespeicherter personenbezogener Daten mit dem Ziel, ihre
                  künftige Verarbeitung einzuschränken.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>e) Profiling</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Profiling ist jede Art der automatisierten Verarbeitung
                  personenbezogener Daten, die darin besteht, dass diese
                  personenbezogenen Daten verwendet werden, um bestimmte
                  persönliche Aspekte, die sich auf eine natürliche Person
                  beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                  Arbeitsleistung, wirtschaftlicher Lage, Gesundheit,
                  persönlicher Vorlieben, Interessen, Zuverlässigkeit,
                  Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen
                  Person zu analysieren oder vorherzusagen.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>f) Pseudonymisierung</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Pseudonymisierung ist die Verarbeitung personenbezogener Daten
                  in einer Weise, auf welche die personenbezogenen Daten ohne
                  Hinzuziehung zusätzlicher Informationen nicht mehr einer
                  spezifischen betroffenen Person zugeordnet werden können,
                  sofern diese zusätzlichen Informationen gesondert aufbewahrt
                  werden und technischen und organisatorischen Maßnahmen
                  unterliegen, die gewährleisten, dass die personenbezogenen
                  Daten nicht einer identifizierten oder identifizierbaren
                  natürlichen Person zugewiesen werden.
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                g) Verantwortlicher oder für die Verarbeitung Verantwortlicher
              </Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Verantwortlicher oder für die Verarbeitung Verantwortlicher
                  ist die natürliche oder juristische Person, Behörde,
                  Einrichtung oder andere Stelle, die allein oder gemeinsam mit
                  anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten entscheidet. Sind die Zwecke und
                  Mittel dieser Verarbeitung durch das Unionsrecht oder das
                  Recht der Mitgliedstaaten vorgegeben, so kann der
                  Verantwortliche beziehungsweise können die bestimmten
                  Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht
                  der Mitgliedstaaten vorgesehen werden.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>h) Auftragsverarbeiter</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Auftragsverarbeiter ist eine natürliche oder juristische
                  Person, Behörde, Einrichtung oder andere Stelle, die
                  personenbezogene Daten im Auftrag des Verantwortlichen
                  verarbeitet.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>i) Empfänger</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Empfänger ist eine natürliche oder juristische Person,
                  Behörde, Einrichtung oder andere Stelle, der personenbezogene
                  Daten offengelegt werden, unabhängig davon, ob es sich bei ihr
                  um einen Dritten handelt oder nicht. Behörden, die im Rahmen
                  eines bestimmten Untersuchungsauftrags nach dem Unionsrecht
                  oder dem Recht der Mitgliedstaaten möglicherweise
                  personenbezogene Daten erhalten, gelten jedoch nicht als
                  Empfänger.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>j) Dritter</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Dritter ist eine natürliche oder juristische Person, Behörde,
                  Einrichtung oder andere Stelle außer der betroffenen Person,
                  dem Verantwortlichen, dem Auftragsverarbeiter und den
                  Personen, die unter der unmittelbaren Verantwortung des
                  Verantwortlichen oder des Auftragsverarbeiters befugt sind,
                  die personenbezogenen Daten zu verarbeiten.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>k) Einwilligung</Typography>
              <Grid item xs={12} mb={2} pl={2} mt={2}>
                <Typography>
                  Einwilligung ist jede von der betroffenen Person freiwillig
                  für den bestimmten Fall in informierter Weise und
                  unmissverständlich abgegebene Willensbekundung in Form einer
                  Erklärung oder einer sonstigen eindeutigen bestätigenden
                  Handlung, mit der die betroffene Person zu verstehen gibt,
                  dass sie mit der Verarbeitung der sie betreffenden
                  personenbezogenen Daten einverstanden ist.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            2. Name und Anschrift des für die Verarbeitung Verantwortlichen
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung,
              sonstiger in den Mitgliedstaaten der Europäischen Union geltenden
              Datenschutzgesetze und anderer Bestimmungen mit
              datenschutzrechtlichem Charakter ist die:
            </Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>FCR Innovation GmbH</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>Kirchplatz 1</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>82049 Pullach im Isartal</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>Deutschland</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>Tel.: 089413249600</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>E-Mail: info@fcr-immobilien.de</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>Website: FCR Innovation GmbH</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Gesetzlich vorgeschriebener Datenschutz­beauftragter
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Wir haben für unser Unternehmen einen Datenschutzbeauftragten
                bestellt.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>Michael Götze.</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>X.CILIO Systemhaus GmbH,</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>E-Mail: datenschutz@xcilio.de</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>3. Cookies</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die Internetseiten der FCR Innovation GmbH verwenden Cookies.
              Cookies sind Textdateien, welche über einen Internetbrowser auf
              einem Computersystem abgelegt und gespeichert werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Zahlreiche Internetseiten und Server verwenden Cookies. Viele
              Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist
              eine eindeutige Kennung des Cookies. Sie besteht aus einer
              Zeichenfolge, durch welche Internetseiten und Server dem konkreten
              Internetbrowser zugeordnet werden können, in dem das Cookie
              gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten
              und Servern, den individuellen Browser der betroffenen Person von
              anderen Internetbrowsern, die andere Cookies enthalten, zu
              unterscheiden. Ein bestimmter Internetbrowser kann über die
              eindeutige Cookie-ID wiedererkannt und identifiziert werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch den Einsatz von Cookies kann die FCR Innovation GmbH den
              Nutzern dieser Internetseite nutzerfreundlichere Services
              bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Mittels eines Cookies können die Informationen und Angebote auf
              unserer Internetseite im Sinne des Benutzers optimiert werden.
              Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer
              Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist
              es, den Nutzern die Verwendung unserer Internetseite zu
              erleichtern. Der Benutzer einer Internetseite, die Cookies
              verwendet, muss beispielsweise nicht bei jedem Besuch der
              Internetseite erneut seine Zugangsdaten eingeben, weil dies von
              der Internetseite und dem auf dem Computersystem des Benutzers
              abgelegten Cookie übernommen wird. Ein weiteres Beispiel ist das
              Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt
              sich die Artikel, die ein Kunde in den virtuellen Warenkorb gelegt
              hat, über ein Cookie.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite jederzeit mittels einer entsprechenden Einstellung
              des genutzten Internetbrowsers verhindern und damit der Setzung
              von Cookies dauerhaft widersprechen. Ferner können bereits
              gesetzte Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden. Dies ist in allen gängigen
              Internetbrowsern möglich. Deaktiviert die betroffene Person die
              Setzung von Cookies in dem genutzten Internetbrowser, sind unter
              Umständen nicht alle Funktionen unserer Internetseite
              vollumfänglich nutzbar.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            4. Erfassung von allgemeinen Daten und Informationen
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die Internetseite der FCR Innovation GmbH erfasst mit jedem Aufruf
              der Internetseite durch eine betroffene Person oder ein
              automatisiertes System eine Reihe von allgemeinen Daten und
              Informationen. Diese allgemeinen Daten und Informationen werden in
              den Logfiles des Servers gespeichert. Erfasst werden können die
              (1) verwendeten Browsertypen und Versionen, (2) das vom
              zugreifenden System verwendete Betriebssystem, (3) die
              Internetseite, von welcher ein zugreifendes System auf unsere
              Internetseite gelangt (sogenannte Referrer), (4) die
              Unterwebseiten, welche über ein zugreifendes System auf unserer
              Internetseite angesteuert werden, (5) das Datum und die Uhrzeit
              eines Zugriffs auf die Internetseite, (6) eine
              Internet-Protokoll-Adresse (IP-Adresse), (7) der
              Internet-Service-Provider des zugreifenden Systems und (8)
              sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr
              im Falle von Angriffen auf unsere informationstechnologischen
              Systeme dienen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Bei der Nutzung dieser allgemeinen Daten und Informationen zieht
              die FCR Innovation GmbH keine Rückschlüsse auf die betroffene
              Person. Diese Informationen werden vielmehr benötigt, um (1) die
              Inhalte unserer Internetseite korrekt auszuliefern, (2) die
              Inhalte unserer Internetseite sowie die Werbung für diese zu
              optimieren, (3) die dauerhafte Funktionsfähigkeit unserer
              informationstechnologischen Systeme und der Technik unserer
              Internetseite zu gewährleisten sowie (4) um
              Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur
              Strafverfolgung notwendigen Informationen bereitzustellen. Diese
              anonym erhobenen Daten und Informationen werden durch die FCR
              Innovation GmbH daher einerseits statistisch und ferner mit dem
              Ziel ausgewertet, den Datenschutz und die Datensicherheit in
              unserem Unternehmen zu erhöhen, um letztlich ein optimales
              Schutzniveau für die von uns verarbeiteten personenbezogenen Daten
              sicherzustellen. Die anonymen Daten der Server-Logfiles werden
              getrennt von allen durch eine betroffene Person angegebenen
              personenbezogenen Daten gespeichert.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>5. Abonnement unseres Newsletters</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Auf der Internetseite der FCR Innovation GmbH wird den Benutzern
              die Möglichkeit eingeräumt, den Newsletter unseres Unternehmens zu
              abonnieren. Welche personenbezogenen Daten bei der Bestellung des
              Newsletters an den für die Verarbeitung Verantwortlichen
              übermittelt werden, ergibt sich aus der hierzu verwendeten
              Eingabemaske.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die FCR Innovation GmbH informiert ihre Kunden und
              Geschäftspartner in regelmäßigen Abständen im Wege eines
              Newsletters über Angebote des Unternehmens. Der Newsletter unseres
              Unternehmens kann von der betroffenen Person grundsätzlich nur
              dann empfangen werden, wenn (1) die betroffene Person über eine
              gültige E-Mail-Adresse verfügt und (2) die betroffene Person sich
              für den Newsletterversand registriert. An die von einer
              betroffenen Person erstmalig für den Newsletterversand
              eingetragene E-Mail-Adresse wird aus rechtlichen Gründen eine
              Bestätigungsmail im Double-Opt-In-Verfahren versendet. Diese
              Bestätigungsmail dient der Überprüfung, ob der Inhaber der
              E-Mail-Adresse als betroffene Person den Empfang des Newsletters
              autorisiert hat.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Bei der Anmeldung zum Newsletter speichern wir ferner die vom
              Internet-Service-Provider (ISP) vergebene IP-Adresse des von der
              betroffenen Person zum Zeitpunkt der Anmeldung verwendeten
              Computersystems sowie das Datum und die Uhrzeit der Anmeldung. Die
              Erhebung dieser Daten ist erforderlich, um den(möglichen)
              Missbrauch der E-Mail-Adresse einer betroffenen Person zu einem
              späteren Zeitpunkt nachvollziehen zu können und dient deshalb der
              rechtlichen Absicherung des für die Verarbeitung Verantwortlichen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die im Rahmen einer Anmeldung zum Newsletter erhobenen
              personenbezogenen Daten werden ausschließlich zum Versand unseres
              Newsletters verwendet. Ferner könnten Abonnenten des Newsletters
              per E-Mail informiert werden, sofern dies für den Betrieb des
              Newsletter-Dienstes oder eine diesbezügliche Registrierung
              erforderlich ist, wie dies im Falle von Änderungen am
              Newsletterangebot oder bei der Veränderung der technischen
              Gegebenheiten der Fall sein könnte. Es erfolgt keine Weitergabe
              der im Rahmen des Newsletter-Dienstes erhobenen personenbezogenen
              Daten an Dritte. Das Abonnement unseres Newsletters kann durch die
              betroffene Person jederzeit gekündigt werden. Die Einwilligung in
              die Speicherung personenbezogener Daten, die die betroffene Person
              uns für den Newsletterversand erteilt hat, kann jederzeit
              widerrufen werden. Zum Zwecke des Widerrufs der Einwilligung
              findet sich in jedem Newsletter ein entsprechender Link. Ferner
              besteht die Möglichkeit, sich jederzeit auch direkt auf der
              Internetseite des für die Verarbeitung Verantwortlichen vom
              Newsletterversand abzumelden oder dies dem für die Verarbeitung
              Verantwortlichen auf andere Weise mitzuteilen.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>6. Newsletter-Tracking</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die Newsletter der FCR Innovation GmbH enthalten sogenannte
              Zählpixel. Ein Zählpixel ist eine Miniaturgrafik, die in solche
              E-Mails eingebettet wird, welche im HTML-Format versendet werden,
              um eine Logdatei-Aufzeichnung und eine Logdatei-Analyse zu
              ermöglichen. Dadurch kann eine statistische Auswertung des
              Erfolges oder Misserfolges von Online-Marketing-Kampagnen
              durchgeführt werden. Anhand des eingebetteten Zählpixels kann die
              FCR Innovation GmbH erkennen, ob und wann eine E-Mail von einer
              betroffenen Person geöffnet wurde und welche in der E-Mail
              befindlichen Links von der betroffenen Person aufgerufen wurden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Solche über die in den Newslettern enthaltenen Zählpixel erhobenen
              personenbezogenen Daten, werden von dem für die Verarbeitung
              Verantwortlichen gespeichert und ausgewertet, um den
              Newsletterversand zu optimieren und den Inhalt zukünftiger
              Newsletter noch besser den Interessen der betroffenen Person
              anzupassen. Diese personenbezogenen Daten werden nicht an Dritte
              weitergegeben. Betroffene Personen sind jederzeit berechtigt, die
              diesbezügliche gesonderte, über das Double-Opt-In-Verfahren
              abgegebene Einwilligungserklärung zu widerrufen. Nach einem
              Widerruf werden diese personenbezogenen Daten von dem für die
              Verarbeitung Verantwortlichen gelöscht. Eine Abmeldung vom Erhalt
              des Newsletters deutet die FCR Innovation GmbH automatisch als
              Widerruf.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>7. Kontaktmöglichkeit über die Internetseite</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die Internetseite der FCR Innovation GmbH enthält aufgrund von
              gesetzlichen Vorschriften Angaben, die eine schnelle elektronische
              Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare
              Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine
              Adresse der sogenannten elektronischen Post (E-Mail-Adresse)
              umfasst. Sofern eine betroffene Person per E-Mail oder über ein
              Kontaktformular den Kontakt mit dem für die Verarbeitung
              Verantwortlichen aufnimmt, werden die von der betroffenen Person
              übermittelten personenbezogenen Daten automatisch gespeichert.
              Solche auf freiwilliger Basis von einer betroffenen Person an den
              für die Verarbeitung Verantwortlichen übermittelten
              personenbezogenen Daten werden für Zwecke der Bearbeitung oder der
              Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt
              keine Weitergabe dieser personenbezogenen Daten an Dritte.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            8. Kommentarfunktion im Blog auf der Internetseite
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die FCR Innovation GmbH bietet den Nutzern auf einem Blog, der
              sich auf der Internetseite des für die Verarbeitung
              Verantwortlichen befindet, die Möglichkeit, individuelle
              Kommentare zu einzelnen Blog-Beiträgen zu hinterlassen. Ein Blog
              ist ein auf einer Internetseite geführtes, in der Regel öffentlich
              einsehbares Portal, in welchem eine oder mehrere Personen, die
              Blogger oder Web-Blogger genannt werden, Artikel posten oder
              Gedanken in sogenannten Blogposts niederschreiben können. Die
              Blogposts können in der Regel von Dritten kommentiert werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Hinterlässt eine betroffene Person einen Kommentar in dem auf
              dieser Internetseite veröffentlichten Blog, werden neben den von
              der betroffenen Person hinterlassenen Kommentaren auch Angaben zum
              Zeitpunkt der Kommentareingabe sowie zu dem von der betroffenen
              Person gewählten Nutzernamen (Pseudonym) gespeichert und
              veröffentlicht. Ferner wird die vom Internet-Service-Provider
              (ISP) der betroffenen Person vergebene IP-Adresse
              mitprotokolliert. Diese Speicherung der IP-Adresse erfolgt aus
              Sicherheitsgründen und für den Fall, dass die betroffene Person
              durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder
              rechtswidrige Inhalte postet. Die Speicherung dieser
              personenbezogenen Daten erfolgt daher im eigenen Interesse des für
              die Verarbeitung Verantwortlichen, damit sich dieser im Falle
              einer Rechtsverletzung gegebenenfalls exkulpieren könnte. Es
              erfolgt keine Weitergabe dieser erhobenen personenbezogenen Daten
              an Dritte, sofern eine solche Weitergabe nicht gesetzlich
              vorgeschrieben ist oder der Rechtsverteidigung des für die
              Verarbeitung Verantwortlichen dient.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            9. Abonnement von Kommentaren im Blog auf der Internetseite
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Die im Blog der FCR Innovation GmbH abgegebenen Kommentare können
              grundsätzlich von Dritten abonniert werden. Insbesondere besteht
              die Möglichkeit, dass ein Kommentator die seinem Kommentar
              nachfolgenden Kommentare zu einem bestimmten Blog-Beitrag
              abonniert.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern sich eine betroffene Person für die Option entscheidet,
              Kommentare zu abonnieren, versendet der für die Verarbeitung
              Verantwortliche eine automatische Bestätigungsmail, um im
              Double-Opt-In-Verfahren zu überprüfen, ob sich wirklich der
              Inhaber der angegebenen E-Mail-Adresse für diese Option
              entschieden hat. Die Option zum Abonnement von Kommentaren kann
              jederzeit beendet werden.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            10. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche verarbeitet und speichert
              personenbezogene Daten der betroffenen Person nur für den
              Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
              ist oder sofern dies durch den Europäischen Richtlinien- und
              Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
              Vorschriften, welchen der für die Verarbeitung Verantwortliche
              unterliegt, vorgesehen wurde.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Entfällt der Speicherungszweck oder läuft eine vom Europäischen
              Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
              Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
              personenbezogenen Daten routinemäßig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder gelöscht.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>11. Rechte der betroffenen Person</Typography>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>a) Recht auf Bestätigung</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede betroffene Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung
                Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
                betreffende personenbezogene Daten verarbeitet werden. Möchte
                eine betroffene Person dieses Bestätigungsrecht in Anspruch
                nehmen, kann sie sich hierzu jederzeit an den
                Datenschutzbeauftragten wenden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>b) Recht auf Auskunft</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, jederzeit von dem für die
                Verarbeitung Verantwortlichen unentgeltliche Auskunft über die
                zu seiner Person gespeicherten personenbezogenen Daten und eine
                Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische
                Richtlinien- und Verordnungsgeber der betroffenen Person
                Auskunft über folgende Informationen zugestanden:
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>die Verarbeitungszwecke</Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                die Kategorien personenbezogener Daten, die verarbeitet werden
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                die Empfänger oder Kategorien von Empfängern, gegenüber denen
                die personenbezogenen Daten offengelegt worden sind oder noch
                offengelegt werden, insbesondere bei Empfängern in Drittländern
                oder bei internationalen Organisationen
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                falls möglich die geplante Dauer, für die die personenbezogenen
                Daten gespeichert werden, oder, falls dies nicht möglich ist,
                die Kriterien für die Festlegung dieser Dauer
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                das Bestehen eines Rechts auf Berichtigung oder Löschung der sie
                betreffenden personenbezogenen Daten oder auf Einschränkung der
                Verarbeitung durch den Verantwortlichen oder eines
                Widerspruchsrechts gegen diese Verarbeitung
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                wenn die personenbezogenen Daten nicht bei der betroffenen
                Person erhoben werden: Alle verfügbaren Informationen über die
                Herkunft der Daten
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                das Bestehen einer automatisierten Entscheidungsfindung
                einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und
                — zumindest in diesen Fällen — aussagekräftige Informationen
                über die involvierte Logik sowie die Tragweite und die
                angestrebten Auswirkungen einer derartigen Verarbeitung für die
                betroffene Person
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Ferner steht der betroffenen Person ein Auskunftsrecht darüber
                zu, ob personenbezogene Daten an ein Drittland oder an eine
                internationale Organisation übermittelt wurden. Sofern dies der
                Fall ist, so steht der betroffenen Person im Übrigen das Recht
                zu, Auskunft über die geeigneten Garantien im Zusammenhang mit
                der Übermittlung zu erhalten.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch
                nehmen, kann sie sich hierzu jederzeit an den
                Datenschutzbeauftragten wenden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>c) Recht auf Berichtigung</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung
                sie betreffender unrichtiger personenbezogener Daten zu
                verlangen. Ferner steht der betroffenen Person das Recht zu,
                unter Berücksichtigung der Zwecke der Verarbeitung, die
                Vervollständigung unvollständiger personenbezogener Daten — auch
                mittels einer ergänzenden Erklärung — zu verlangen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Möchte eine betroffene Person dieses Berichtigungsrecht in
                Anspruch nehmen, kann sie sich hierzu jederzeit an den
                Datenschutzbeauftragten wenden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              d) Recht auf Löschung (Recht auf Vergessen werden)
            </Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu
                verlangen, dass die sie betreffenden personenbezogenen Daten
                unverzüglich gelöscht werden, sofern einer der folgenden Gründe
                zutrifft und soweit die Verarbeitung nicht erforderlich ist:
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die personenbezogenen Daten wurden für solche Zwecke erhoben
                oder auf sonstige Weise verarbeitet, für welche sie nicht mehr
                notwendig sind.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die betroffene Person widerruft ihre Einwilligung, auf die sich
                die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder
                Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer
                anderweitigen Rechtsgrundlage für die Verarbeitung.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO
                Widerspruch gegen die Verarbeitung ein, und es liegen keine
                vorrangigen berechtigten Gründe für die Verarbeitung vor, oder
                die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
                Widerspruch gegen die Verarbeitung ein.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die Löschung der personenbezogenen Daten ist zur Erfüllung einer
                rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht
                der Mitgliedstaaten erforderlich, dem der Verantwortliche
                unterliegt.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die personenbezogenen Daten wurden in Bezug auf angebotene
                Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO
                erhoben.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Sofern einer der oben genannten Gründe zutrifft und eine
                betroffene Person die Löschung von personenbezogenen Daten, die
                bei der FCR Innovation GmbH gespeichert sind, veranlassen
                möchte, kann sie sich hierzu jederzeit an den
                Datenschutzbeauftragten wenden. Der Datenschutzbeauftragte der
                FCR Innovation GmbH wird veranlassen, dass dem Löschverlangen
                unverzüglich nachgekommen wird.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Wurden die personenbezogenen Daten von der FCR Innovation GmbH
                öffentlich gemacht und ist unser Unternehmen als
                Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der
                personenbezogenen Daten verpflichtet, so trifft die FCR
                Innovation GmbH unter Berücksichtigung der verfügbaren
                Technologie und der Implementierungskosten angemessene
                Maßnahmen, auch technischer Art, um andere für die
                Datenverarbeitung Verantwortliche, welche die veröffentlichten
                personenbezogenen Daten verarbeiten, darüber in Kenntnis zu
                setzen, dass die betroffene Person von diesen anderen für die
                Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links
                zu diesen personenbezogenen Daten oder von Kopien oder
                Replikationen dieser personenbezogenen Daten verlangt hat,
                soweit die Verarbeitung nicht erforderlich ist. Der
                Datenschutzbeauftragte der FCR Innovation GmbH wird im
                Einzelfall das Notwendige veranlassen.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>e) Recht auf Einschränkung der Verarbeitung</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, von dem Verantwortlichen die
                Einschränkung der Verarbeitung zu verlangen, wenn eine der
                folgenden Voraussetzungen gegeben ist:
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die Richtigkeit der personenbezogenen Daten wird von der
                betroffenen Person bestritten, und zwar für eine Dauer, die es
                dem Verantwortlichen ermöglicht, die Richtigkeit der
                personenbezogenen Daten zu überprüfen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt
                die Löschung der personenbezogenen Daten ab und verlangt
                stattdessen die Einschränkung der Nutzung der personenbezogenen
                Daten.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Der Verantwortliche benötigt die personenbezogenen Daten für die
                Zwecke der Verarbeitung nicht länger, die betroffene Person
                benötigt sie jedoch zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die betroffene Person hat Widerspruch gegen die Verarbeitung
                gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht
                fest, ob die berechtigten Gründe des Verantwortlichen gegenüber
                denen der betroffenen Person überwiegen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Sofern eine der oben genannten Voraussetzungen gegeben ist und
                eine betroffene Person die Einschränkung von personenbezogenen
                Daten, die bei der FCR Innovation GmbH gespeichert sind,
                verlangen möchte, kann sie sich hierzu jederzeit an den
                Datenschutzbeauftragten wenden. Der Datenschutzbeauftragte der
                FCR Innovation GmbH wird die Einschränkung der Verarbeitung
                veranlassen.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>f) Recht auf Datenübertragbarkeit</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, die sie betreffenden
                personenbezogenen Daten, welche durch die betroffene Person
                einem Verantwortlichen bereitgestellt wurden, in einem
                strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten. Sie hat außerdem das Recht, diese Daten einem anderen
                Verantwortlichen ohne Behinderung durch den Verantwortlichen,
                dem die personenbezogenen Daten bereitgestellt wurden, zu
                übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß
                Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a
                DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b
                DS-GVO beruht und die Verarbeitung mithilfe automatisierter
                Verfahren erfolgt, sofern die Verarbeitung nicht für die
                Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen
                Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                welche dem Verantwortlichen übertragen wurde.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Ferner hat die betroffene Person bei der Ausübung ihres Rechts
                auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht,
                zu erwirken, dass die personenbezogenen Daten direkt von einem
                Verantwortlichen an einen anderen Verantwortlichen übermittelt
                werden, soweit dies technisch machbar ist und sofern hiervon
                nicht die Rechte und Freiheiten anderer Personen beeinträchtigt
                werden.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich
                die betroffene Person jederzeit an den Datenschutzbeauftragten
                der FCR Innovation GmbH wenden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>g) Recht auf Widerspruch</Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer
                besonderen Situation ergeben, jederzeit gegen die Verarbeitung
                sie betreffender personenbezogener Daten, die aufgrund von Art.
                6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch
                einzulegen. Dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Die FCR Innovation GmbH verarbeitet die personenbezogenen Daten
                im Falle des Widerspruchs nicht mehr, es sei denn, wir können
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                die den Interessen, Rechten und Freiheiten der betroffenen
                Person überwiegen, oder die Verarbeitung dient der
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Verarbeitet die FCR Innovation GmbH personenbezogene Daten, um
                Direktwerbung zu betreiben, so hat die betroffene Person das
                Recht, jederzeit Widerspruch gegen die Verarbeitung der
                personenbezogenen Daten zum Zwecke derartiger Werbung
                einzulegen. Dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht. Widerspricht die
                betroffene Person gegenüber der FCR Innovation GmbH der
                Verarbeitung für Zwecke der Direktwerbung, so wird die FCR
                Innovation GmbH die personenbezogenen Daten nicht mehr für diese
                Zwecke verarbeiten.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Zudem hat die betroffene Person das Recht, aus Gründen, die sich
                aus ihrer besonderen Situation ergeben, gegen die sie
                betreffende Verarbeitung personenbezogener Daten, die bei der
                FCR Innovation GmbH zu wissenschaftlichen oder historischen
                Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89
                Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn,
                eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen
                Interesse liegenden Aufgabe erforderlich.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene
                Person direkt an den Datenschutzbeauftragten wenden. Der
                betroffenen Person steht es ferner frei, im Zusammenhang mit der
                Nutzung von Diensten der Informationsgesellschaft, ungeachtet
                der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels
                automatisierter Verfahren auszuüben, bei denen technische
                Spezifikationen verwendet werden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              h) Automatisierte Entscheidungen im Einzelfall einschließlich
              Profiling
            </Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf
                einer automatisierten Verarbeitung — einschließlich Profiling —
                beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber
                rechtliche Wirkung entfaltet oder sie in ähnlicher Weise
                erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für
                den Abschluss oder die Erfüllung eines Vertrags zwischen der
                betroffenen Person und dem Verantwortlichen erforderlich ist,
                oder (2) aufgrund von Rechtsvorschriften der Union oder der
                Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig
                ist und diese Rechtsvorschriften angemessene Maßnahmen zur
                Wahrung der Rechte und Freiheiten sowie der berechtigten
                Interessen der betroffenen Person enthalten oder (3) mit
                ausdrücklicher Einwilligung der betroffenen Person erfolgt.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Ist die Entscheidung (1) für den Abschluss oder die Erfüllung
                eines Vertrags zwischen der betroffenen Person und dem
                Verantwortlichen erforderlich oder (2) erfolgt sie mit
                ausdrücklicher Einwilligung der betroffenen Person, trifft die
                FCR Innovation GmbH angemessene Maßnahmen, um die Rechte und
                Freiheiten sowie die berechtigten Interessen der betroffenen
                Person zu wahren, wozu mindestens das Recht auf Erwirkung des
                Eingreifens einer Person seitens des Verantwortlichen, auf
                Darlegung des eigenen Standpunkts und auf Anfechtung der
                Entscheidung gehört.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Möchte die betroffene Person Rechte mit Bezug auf automatisierte
                Entscheidungen geltend machen, kann sie sich hierzu jederzeit an
                den Datenschutzbeauftragten wenden.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
            </Typography>
            <Grid item xs={12} mb={2} pl={2} mt={2}>
              <Typography>
                Jede von der Verarbeitung personenbezogener Daten betroffene
                Person hat das vom Europäischen Richtlinien- und
                Verordnungsgeber gewährte Recht, eine Einwilligung zur
                Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
              </Typography>
            </Grid>
            <Grid item xs={12} mb={2} pl={2}>
              <Typography>
                Möchte die betroffene Person ihr Recht auf Widerruf einer
                Einwilligung geltend machen, kann sie sich hierzu jederzeit an
                den Datenschutzbeauftragten wenden.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            12. Datenschutz bei Bewerbungen und im Bewerbungsverfahren
          </Typography>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche erhebt und verarbeitet
              die personenbezogenen Daten von Bewerbern zum Zwecke der
              Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch
              auf elektronischem Wege erfolgen. Dies ist insbesondere dann der
              Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem
              elektronischen Wege, beispielsweise per E-Mail oder über ein auf
              der Internetseite befindliches Webformular, an den für die
              Verarbeitung Verantwortlichen übermittelt. Schließt der für die
              Verarbeitung Verantwortliche einen Anstellungsvertrag mit einem
              Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung
              des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen
              Vorschriften gespeichert. Wird von dem für die Verarbeitung
              Verantwortlichen kein Anstellungsvertrag mit dem Bewerber
              geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach
              Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern
              einer Löschung keine sonstigen berechtigten Interessen des für die
              Verarbeitung Verantwortlichen entgegenstehen. Sonstiges
              berechtigtes Interesse in diesem Sinne ist beispielsweise eine
              Beweispflicht in einem Verfahren nach dem Allgemeinen
              Gleichbehandlungsgesetz (AGG).
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            13. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten des Unternehmens Facebook integriert.
              Facebook ist ein soziales Netzwerk.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten des Unternehmens Facebook integriert.
              Facebook ist ein soziales Netzwerk.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Ein soziales Netzwerk ist ein im Internet betriebener sozialer
              Treffpunkt, eine Online-Gemeinschaft, die es den Nutzern in der
              Regel ermöglicht, untereinander zu kommunizieren und im virtuellen
              Raum zu interagieren. Ein soziales Netzwerk kann als Plattform zum
              Austausch von Meinungen und Erfahrungen dienen oder ermöglicht es
              der Internetgemeinschaft, persönliche oder unternehmensbezogene
              Informationen bereitzustellen. Facebook ermöglicht den Nutzern des
              sozialen Netzwerkes unter anderem die Erstellung von privaten
              Profilen, den Upload von Fotos und eine Vernetzung über
              Freundschaftsanfragen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von Facebook ist die Facebook, Inc., 1
              Hacker Way, Menlo Park, CA 94025, USA. Für die Verarbeitung
              personenbezogener Daten Verantwortlicher ist, wenn eine betroffene
              Person außerhalb der USA oder Kanada lebt, die Facebook Ireland
              Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine Facebook-Komponente (Facebook-Plug-In)
              integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Facebook-Komponente veranlasst,
              eine Darstellung der entsprechenden Facebook-Komponente von
              Facebook herunterzuladen. Eine Gesamtübersicht über alle
              Facebook-Plug-Ins kann unter
              https://developers.facebook.com/docs/plugins/?locale=de_DE
              abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält
              Facebook Kenntnis darüber, welche konkrete Unterseite unserer
              Internetseite durch die betroffene Person besucht wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei Facebook eingeloggt
              ist, erkennt Facebook mit jedem Aufruf unserer Internetseite durch
              die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht.
              Diese Informationen werden durch die Facebook-Komponente gesammelt
              und durch Facebook dem jeweiligen Facebook-Account der betroffenen
              Person zugeordnet. Betätigt die betroffene Person einen der auf
              unserer Internetseite integrierten Facebook-Buttons,
              beispielsweise den „Gefällt mir“-Button, oder gibt die betroffene
              Person einen Kommentar ab, ordnet Facebook diese Information dem
              persönlichen Facebook-Benutzerkonto der betroffenen Person zu und
              speichert diese personenbezogenen Daten.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Facebook erhält über die Facebook-Komponente immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              Facebook eingeloggt ist; dies findet unabhängig davon statt, ob
              die betroffene Person die Facebook-Komponente anklickt oder nicht.
              Ist eine derartige Übermittlung dieser Informationen an Facebook
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem Facebook-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die von Facebook veröffentlichte Datenrichtlinie, die unter
              https://de-de.facebook.com/about/privacy/ abrufbar ist, gibt
              Aufschluss über die Erhebung, Verarbeitung und Nutzung
              personenbezogener Daten durch Facebook. Ferner wird dort
              erläutert, welche Einstellungsmöglichkeiten Facebook zum Schutz
              der Privatsphäre der betroffenen Person bietet. Zudem sind
              unterschiedliche Applikationen erhältlich, die es ermöglichen,
              eine Datenübermittlung an Facebook zu unterdrücken. Solche
              Applikationen können durch die betroffene Person genutzt werden,
              um eine Datenübermittlung an Facebook zu unterdrücken.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            14. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
            AdSense
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Google AdSense integriert. Google AdSense ist ein
              Online-Dienst, über welchen eine Vermittlung von Werbung auf
              Drittseiten ermöglicht wird. Google AdSense beruht auf einem
              Algorithmus, welcher die auf Drittseiten angezeigten Werbeanzeigen
              passend zu den Inhalten der jeweiligen Drittseite auswählt. Google
              AdSense gestattet ein interessenbezogenes Targeting des
              Internetnutzers, welches mittels Generierung von individuellen
              Benutzerprofilen umgesetzt wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft der Google-AdSense-Komponente ist die Google
              Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5,
              Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Der Zweck der Google-AdSense-Komponente ist die Einbindung von
              Werbeanzeigen auf unserer Internetseite. Google-AdSense setzt ein
              Cookie auf dem informationstechnologischen System der betroffenen
              Person. Was Cookies sind, wurde oben bereits erläutert. Mit der
              Setzung des Cookies wird der Alphabet Inc. eine Analyse der
              Benutzung unserer Internetseite ermöglicht. Durch jeden Aufruf
              einer der Einzelseiten dieser Internetseite, die durch den für die
              Verarbeitung Verantwortlichen betrieben wird und auf welcher eine
              Google-AdSense-Komponente integriert wurde, wird der
              Internetbrowser auf dem informationstechnologischen System der
              betroffenen Person automatisch durch die jeweilige
              Google-AdSense-Komponente veranlasst, Daten zum Zwecke der
              Online-Werbung und der Abrechnung von Provisionen an die Alphabet
              Inc. zu übermitteln. Im Rahmen dieses technischen Verfahrens
              erhält die Alphabet Inc. Kenntnis über personenbezogene Daten, wie
              der IP-Adresse der betroffenen Person, die der Alphabet Inc. unter
              anderem dazu dienen, die Herkunft der Besucher und Klicks
              nachzuvollziehen und in der Folge Provisionsabrechnungen zu
              ermöglichen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass die Alphabet Inc. ein
              Cookie auf dem informationstechnologischen System der betroffenen
              Person setzt. Zudem kann ein von der Alphabet Inc. bereits
              gesetzter Cookie jederzeit über den Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Google AdSense verwendet zudem sogenannte Zählpixel. Ein Zählpixel
              ist eine Miniaturgrafik, die in Internetseiten eingebettet wird,
              um eine Logdatei-Aufzeichnung und eine Logdatei-Analyse zu
              ermöglichen, wodurch eine statistische Auswertung durchgeführt
              werden kann. Anhand des eingebetteten Zählpixels kann die Alphabet
              Inc. erkennen, ob und wann eine Internetseite von einer
              betroffenen Person geöffnet wurde und welche Links von der
              betroffenen Person angeklickt wurden. Zählpixel dienen unter
              anderem dazu, den Besucherfluss einer Internetseite auszuwerten.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Über Google AdSense werden personenbezogene Daten und
              Informationen, was auch die IP-Adresse umfasst und zur Erfassung
              und Abrechnung der angezeigten Werbeanzeigen notwendig ist, an die
              Alphabet Inc. in die Vereinigten Staaten von Amerika übertragen.
              Diese personenbezogenen Daten werden in den Vereinigten Staaten
              von Amerika gespeichert und verarbeitet. Die Alphabet Inc. gibt
              diese über das technische Verfahren erhobenen personenbezogenen
              Daten unter Umständen an Dritte weiter.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Google-AdSense wird unter diesem Link{" "}
              <a
                target="blank"
                href="https://www.google.de/intl/de/adsense/start/"
              >
                https://www.google.de/intl/de/adsense/start
              </a>{" "}
              genauer erläutert.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            15. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
            Analytics (mit Anonymisierungsfunktion)
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite die Komponente Google Analytics (mit
              Anonymisierungsfunktion) integriert. Google Analytics ist ein
              Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und
              Auswertung von Daten über das Verhalten von Besuchern von
              Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten
              darüber, von welcher Internetseite eine betroffene Person auf eine
              Internetseite gekommen ist (sogenannte Referrer), auf welche
              Unterseiten der Internetseite zugegriffen oder wie oft und für
              welche Verweildauer eine Unterseite betrachtet wurde. Eine
              Web-Analyse wird überwiegend zur Optimierung einer Internetseite
              und zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft der Google-Analytics-Komponente ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
              E5W5, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche verwendet für die
              Web-Analyse über Google Analytics den Zusatz „_gat._anonymizeIp“.
              Mittels dieses Zusatzes wird die IP-Adresse des
              Internetanschlusses der betroffenen Person von Google gekürzt und
              anonymisiert, wenn der Zugriff auf unsere Internetseiten aus einem
              Mitgliedstaat der Europäischen Union oder aus einem anderen
              Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum
              erfolgt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Der Zweck der Google-Analytics-Komponente ist die Analyse der
              Besucherströme auf unserer Internetseite. Google nutzt die
              gewonnenen Daten und Informationen unter anderem dazu, die Nutzung
              unserer Internetseite auszuwerten, um für uns Online-Reports,
              welche die Aktivitäten auf unseren Internetseiten aufzeigen,
              zusammenzustellen, und um weitere mit der Nutzung unserer
              Internetseite in Verbindung stehende Dienstleistungen zu
              erbringen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Google Analytics setzt ein Cookie auf dem
              informationstechnologischen System der betroffenen Person. Was
              Cookies sind, wurde oben bereits erläutert. Mit Setzung des
              Cookies wird Google eine Analyse der Benutzung unserer
              Internetseite ermöglicht. Durch jeden Aufruf einer der
              Einzelseiten dieser Internetseite, die durch den für die
              Verarbeitung Verantwortlichen betrieben wird und auf welcher eine
              Google-Analytics-Komponente integriert wurde, wird der
              Internetbrowser auf dem informationstechnologischen System der
              betroffenen Person automatisch durch die jeweilige
              Google-Analytics-Komponente veranlasst, Daten zum Zwecke der
              Online-Analyse an Google zu übermitteln. Im Rahmen dieses
              technischen Verfahrens erhält Google Kenntnis über
              personenbezogene Daten, wie der IP-Adresse der betroffenen Person,
              die Google unter anderem dazu dienen, die Herkunft der Besucher
              und Klicks nachzuvollziehen und in der Folge
              Provisionsabrechnungen zu ermöglichen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Mittels des Cookies werden personenbezogene Informationen,
              beispielsweise die Zugriffszeit, der Ort, von welchem ein Zugriff
              ausging und die Häufigkeit der Besuche unserer Internetseite durch
              die betroffene Person, gespeichert. Bei jedem Besuch unserer
              Internetseiten werden diese personenbezogenen Daten,
              einschließlich der IP-Adresse des von der betroffenen Person
              genutzten Internetanschlusses, an Google in den Vereinigten
              Staaten von Amerika übertragen. Diese personenbezogenen Daten
              werden durch Google in den Vereinigten Staaten von Amerika
              gespeichert. Google gibt diese über das technische Verfahren
              erhobenen personenbezogenen Daten unter Umständen an Dritte
              weiter.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Google ein Cookie auf
              dem informationstechnologischen System der betroffenen Person
              setzt. Zudem kann ein von Google Analytics bereits gesetzter
              Cookie jederzeit über den Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Ferner besteht für die betroffene Person die Möglichkeit, einer
              Erfassung der durch Google Analytics erzeugten, auf eine Nutzung
              dieser Internetseite bezogenen Daten sowie der Verarbeitung dieser
              Daten durch Google zu widersprechen und eine solche zu verhindern.
              Hierzu muss die betroffene Person ein Browser-Add-On unter dem
              Link https://tools.google.com/dlpage/gaoptout herunterladen und
              installieren. Dieses Browser-Add-On teilt Google Analytics über
              JavaScript mit, dass keine Daten und Informationen zu den Besuchen
              von Internetseiten an Google Analytics übermittelt werden dürfen.
              Die Installation des Browser-Add-Ons wird von Google als
              Widerspruch gewertet. Wird das informationstechnologische System
              der betroffenen Person zu einem späteren Zeitpunkt gelöscht,
              formatiert oder neu installiert, muss durch die betroffene Person
              eine erneute Installation des Browser-Add-Ons erfolgen, um Google
              Analytics zu deaktivieren. Sofern das Browser-Add-On durch die
              betroffene Person oder einer anderen Person, die ihrem
              Machtbereich zuzurechnen ist, deinstalliert oder deaktiviert wird,
              besteht die Möglichkeit der Neuinstallation oder der erneuten
              Aktivierung des Browser-Add-Ons.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Google können unter{" "}
              <a
                target="blank"
                href="https://www.google.de/intl/de/policies/privacy/"
              >
                https://www.google.de/intl/de/policies/privacy
              </a>{" "}
              und unter{" "}
              <a
                target="blank"
                href="http://www.google.com/analytics/terms/de.html"
              >
                http://www.google.com/analytics/terms/de.html
              </a>{" "}
              abgerufen werden. Google Analytics wird unter diesem Link
              https://www.google.com/intl/de_de/analytics/ genauer erläutert.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            16. Datenschutzbestimmungen zu Einsatz und Verwendung von Google
            Remarketing
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Dienste von Google Remarketing integriert. Google
              Remarketing ist eine Funktion von Google-AdWords, die es einem
              Unternehmen ermöglicht, bei solchen Internetnutzern Werbung
              einblenden zu lassen, die sich zuvor auf der Internetseite des
              Unternehmens aufgehalten haben. Die Integration von Google
              Remarketing gestattet es einem Unternehmen demnach, nutzerbezogene
              Werbung zu erstellen und dem Internetnutzer folglich
              interessenrelevante Werbeanzeigen anzeigen zu lassen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft der Dienste von Google Remarketing ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
              E5W5, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Zweck von Google Remarketing ist die Einblendung von
              interessenrelevanter Werbung. Google Remarketing ermöglicht es
              uns, Werbeanzeigen über das Google-Werbenetzwerk anzuzeigen oder
              auf anderen Internetseiten anzeigen zu lassen, welche auf die
              individuellen Bedürfnisse und Interessen von Internetnutzern
              abgestimmt sind.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Google Remarketing setzt ein Cookie auf dem
              informationstechnologischen System der betroffenen Person. Was
              Cookies sind, wurde oben bereits erläutert. Mit der Setzung des
              Cookies wird Google eine Wiedererkennung des Besuchers unserer
              Internetseite ermöglicht, wenn dieser in der Folge Internetseiten
              aufruft, die ebenfalls Mitglied des Google-Werbenetzwerks sind.
              Mit jedem Aufruf einer Internetseite, auf welcher der Dienst von
              Google Remarketing integriert wurde, identifiziert sich der
              Internetbrowser der betroffenen Person automatisch bei Google. Im
              Rahmen dieses technischen Verfahrens erhält Google Kenntnis über
              personenbezogene Daten, wie der IP-Adresse oder des Surfverhaltens
              des Nutzers, welche Google unter anderem zur Einblendung
              interessenrelevanter Werbung verwendet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Mittels des Cookies werden personenbezogene Informationen,
              beispielsweise die durch die betroffene Person besuchten
              Internetseiten, gespeichert. Bei jedem Besuch unserer
              Internetseiten werden demnach personenbezogene Daten,
              einschließlich der IP-Adresse des von der betroffenen Person
              genutzten Internetanschlusses, an Google in den Vereinigten
              Staaten von Amerika übertragen. Diese personenbezogenen Daten
              werden durch Google in den Vereinigten Staaten von Amerika
              gespeichert. Google gibt diese über das technische Verfahren
              erhobenen personenbezogenen Daten unter Umständen an Dritte
              weiter.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Google ein Cookie auf
              dem informationstechnologischen System der betroffenen Person
              setzt. Zudem kann ein von Google Analytics bereits gesetzter
              Cookie jederzeit über den Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Ferner besteht für die betroffene Person die Möglichkeit, der
              interessenbezogenen Werbung durch Google zu widersprechen. Hierzu
              muss die betroffene Person von jedem der von ihr genutzten
              Internetbrowser aus den Link{" "}
              <a target="blank" href="www.google.de/settings/ads">
                www.google.de/settings/ads
              </a>{" "}
              aufrufen und dort die gewünschten Einstellungen vornehmen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Google können unter
              https://www.google.de/intl/de/policies/privacy/ abgerufen werden.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            17. Datenschutzbestimmungen zu Einsatz und Verwendung von Google+
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite als Komponente die Google+ Schaltfläche integriert.
              Google+ ist ein sogenanntes soziales Netzwerk. Ein soziales
              Netzwerk ist ein im Internet betriebener sozialer Treffpunkt, eine
              Online-Gemeinschaft, die es den Nutzern in der Regel ermöglicht,
              untereinander zu kommunizieren und im virtuellen Raum zu
              interagieren. Ein soziales Netzwerk kann als Plattform zum
              Austausch von Meinungen und Erfahrungen dienen oder ermöglicht es
              der Internetgemeinschaft, persönliche oder unternehmensbezogene
              Informationen bereitzustellen. Google+ ermöglicht den Nutzern des
              sozialen Netzwerkes unter anderem die Erstellung von privaten
              Profilen, den Upload von Fotos und eine Vernetzung über
              Freundschaftsanfragen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von Google+ ist die Google Ireland Limited,
              Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine Google+ Schaltfläche integriert wurde, wird
              der Internetbrowser auf dem informationstechnologischen System der
              betroffenen Person automatisch durch die jeweilige Google+
              Schaltfläche veranlasst, eine Darstellung der entsprechenden
              Google+ Schaltfläche von Google herunterzuladen. Im Rahmen dieses
              technischen Verfahrens erhält Google Kenntnis darüber, welche
              konkrete Unterseite unserer Internetseite durch die betroffene
              Person besucht wird. Genauere Informationen zu Google+ sind unter{" "}
              <a
                target="blank"
                href="https://developers.google.com/+/ abrufbar"
              >
                https://developers.google.com/+/ abrufbar
              </a>
              .
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei Google+ eingeloggt
              ist, erkennt Google mit jedem Aufruf unserer Internetseite durch
              die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht.
              Diese Informationen werden durch die Google+ Schaltfläche
              gesammelt und durch Google dem jeweiligen Google+-Account der
              betroffenen Person zugeordnet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betätigt die betroffene Person einen der auf unserer Internetseite
              integrierten Google+-Buttons und gibt damit eine Google+1
              Empfehlung ab, ordnet Google diese Information dem persönlichen
              Google+-Benutzerkonto der betroffenen Person zu und speichert
              diese personenbezogenen Daten. Google speichert die
              Google+1-Empfehlung der betroffenen Person und macht diese in
              Übereinstimmung mit den von der betroffenen Person diesbezüglich
              akzeptierten Bedingungen öffentlich zugänglich. Eine von der
              betroffenen Person auf dieser Internetseite abgegebene
              Google+1-Empfehlung wird in der Folge zusammen mit anderen
              personenbezogenen Daten, wie dem Namen des von der betroffenen
              Person genutzten Google+1-Accounts und dem in diesem hinterlegten
              Foto in anderen Google-Diensten, beispielsweise den
              Suchmaschinenergebnissen der Google-Suchmaschine, dem Google-Konto
              der betroffenen Person oder an sonstigen Stellen, beispielsweise
              auf Internetseiten oder im Zusammenhang mit Werbeanzeigen,
              gespeichert und verarbeitet. Ferner ist Google in der Lage, den
              Besuch auf dieser Internetseite mit anderen bei Google
              gespeicherten personenbezogenen Daten zu verknüpfen. Google
              zeichnet diese personenbezogenen Informationen ferner mit dem
              Zweck auf, die unterschiedlichen Dienste von Google zu verbessern
              oder zu optimieren.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Google erhält über die Google+-Schaltfläche immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              Google+ eingeloggt ist; dies findet unabhängig davon statt, ob die
              betroffene Person die Google+-Schaltfläche anklickt oder nicht.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Ist eine Übermittlung personenbezogener Daten an Google von der
              betroffenen Person nicht gewollt, kann diese eine solche
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem Google+-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Google können unter&nbsp;
              <a
                target="blank"
                href="https://www.google.de/intl/de/policies/privacy"
              >
                https://www.google.de/intl/de/policies/privacy
              </a>
              &nbsp; abgerufen werden. Weitere Hinweise von Google zur
              Google+1-Schaltfläche können unter&nbsp;
              <a
                target="blank"
                href="https://developers.google.com/+/web/buttons-policy"
              >
                https://developers.google.com/+/web/buttons-policy
              </a>
              &nbsp; abgerufen werden.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            18. Datenschutzbestimmungen zu Einsatz und Verwendung von
            Google-AdWords
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Google AdWords integriert. Google AdWords ist ein
              Dienst zur Internetwerbung, der es Werbetreibenden gestattet,
              sowohl Anzeigen in den Suchmaschinenergebnissen von Google als
              auch im Google-Werbenetzwerk zu schalten. Google AdWords
              ermöglicht es einem Werbetreibenden, vorab bestimmte
              Schlüsselwörter festzulegen, mittels derer eine Anzeige in den
              Suchmaschinenergebnissen von Google ausschließlich dann angezeigt
              wird, wenn der Nutzer mit der Suchmaschine ein
              schlüsselwortrelevantes Suchergebnis abruft. Im
              Google-Werbenetzwerk werden die Anzeigen mittels eines
              automatischen Algorithmus und unter Beachtung der zuvor
              festgelegten Schlüsselwörter auf themenrelevanten Internetseiten
              verteilt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft der Dienste von Google AdWords ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04
              E5W5, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Der Zweck von Google AdWords ist die Bewerbung unserer
              Internetseite durch die Einblendung von interessenrelevanter
              Werbung auf den Internetseiten von Drittunternehmen und in den
              Suchmaschinenergebnissen der Suchmaschine Google und eine
              Einblendung von Fremdwerbung auf unserer Internetseite.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Gelangt eine betroffene Person über eine Google-Anzeige auf unsere
              Internetseite, wird auf dem informationstechnologischen System der
              betroffenen Person durch Google ein sogenannter Conversion-Cookie
              abgelegt. Was Cookies sind, wurde oben bereits erläutert. Ein
              Conversion-Cookie verliert nach dreißig Tagen seine Gültigkeit und
              dient nicht zur Identifikation der betroffenen Person. Über den
              Conversion-Cookie wird, sofern das Cookie noch nicht abgelaufen
              ist, nachvollzogen, ob bestimmte Unterseiten, beispielsweise der
              Warenkorb von einem Online-Shop-System, auf unserer Internetseite
              aufgerufen wurden. Durch den Conversion-Cookie können sowohl wir
              als auch Google nachvollziehen, ob eine betroffene Person, die
              über eine AdWords-Anzeige auf unsere Internetseite gelangt ist,
              einen Umsatz generierte, also einen Warenkauf vollzogen oder
              abgebrochen hat.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die durch die Nutzung des Conversion-Cookies erhobenen Daten und
              Informationen werden von Google verwendet, um Besuchsstatistiken
              für unsere Internetseite zu erstellen. Diese Besuchsstatistiken
              werden durch uns wiederum genutzt, um die Gesamtanzahl der Nutzer
              zu ermitteln, welche über AdWords-Anzeigen an uns vermittelt
              wurden, also um den Erfolg oder Misserfolg der jeweiligen
              AdWords-Anzeige zu ermitteln und um unsere AdWords-Anzeigen für
              die Zukunft zu optimieren. Weder unser Unternehmen noch andere
              Werbekunden von Google-AdWords erhalten Informationen von Google,
              mittels derer die betroffene Person identifiziert werden könnte.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Mittels des Conversion-Cookies werden personenbezogene
              Informationen, beispielsweise die durch die betroffene Person
              besuchten Internetseiten, gespeichert. Bei jedem Besuch unserer
              Internetseiten werden demnach personenbezogene Daten,
              einschließlich der IP-Adresse des von der betroffenen Person
              genutzten Internetanschlusses, an Google in den Vereinigten
              Staaten von Amerika übertragen. Diese personenbezogenen Daten
              werden durch Google in den Vereinigten Staaten von Amerika
              gespeichert. Google gibt diese über das technische Verfahren
              erhobenen personenbezogenen Daten unter Umständen an Dritte
              weiter.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Google einen
              Conversion-Cookie auf dem informationstechnologischen System der
              betroffenen Person setzt. Zudem kann ein von Google AdWords
              bereits gesetzter Cookie jederzeit über den Internetbrowser oder
              andere Softwareprogramme gelöscht werden.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Ferner besteht für die betroffene Person die Möglichkeit, der
              interessenbezogenen Werbung durch Google zu widersprechen. Hierzu
              muss die betroffene Person von jedem der von ihr genutzten
              Internetbrowser aus den Link{" "}
              <a target="blank" href="www.google.de/settings/ads">
                www.google.de/settings/ads
              </a>{" "}
              aufrufen und dort die gewünschten Einstellungen vornehmen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Google können unter{" "}
              <a
                target="blank"
                href="https://www.google.de/intl/de/policies/privacy"
              >
                https://www.google.de/intl/de/policies/privacy
              </a>{" "}
              abgerufen werden.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>19. Google reCaptcha</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf
              dieser Website (z. B. in einem Kontaktformular) durch einen
              Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu
              analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand
              verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald
              der Websitebesucher die Website betritt. Zur Analyse wertet
              reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse,
              Verweildauer des Websitebesuchers auf der Website oder vom Nutzer
              getätigte Mausbewegungen). Die bei der Analyse erfassten Daten
              werden an Google weitergeleitet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
              Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
              stattfindet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse daran, seine Webangebote vor
              missbräuchlicher automatisierter Ausspähung und vor SPAM zu
              schützen. Sofern eine entsprechende Einwilligung abgefragt wurde,
              erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
              Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
              unter folgenden Links:
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              <a
                target="blank"
                href="https://policies.google.com/privacy?hl=de"
              >
                https://policies.google.com/privacy?hl=de
              </a>{" "}
              und{" "}
              <a target="blank" href="https://policies.google.com/terms?hl=de">
                https://policies.google.com/terms?hl=de.
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} mb={2}>
          <Typography>
            20. Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Betreibergesellschaft der Dienste von Instagram ist die Facebook
              Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
              Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine Instagram-Komponente (Insta-Button)
              integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Instagram-Komponente veranlasst,
              eine Darstellung der entsprechenden Komponente von Instagram
              herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält
              Instagram Kenntnis darüber, welche konkrete Unterseite unserer
              Internetseite durch die betroffene Person besucht wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei Instagram eingeloggt
              ist, erkennt Instagram mit jedem Aufruf unserer Internetseite
              durch die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite die betroffene Person besucht. Diese Informationen
              werden durch die Instagram-Komponente gesammelt und durch
              Instagram dem jeweiligen Instagram-Account der betroffenen Person
              zugeordnet. Betätigt die betroffene Person einen der auf unserer
              Internetseite integrierten Instagram-Buttons, werden die damit
              übertragenen Daten und Informationen dem persönlichen
              Instagram-Benutzerkonto der betroffenen Person zugeordnet und von
              Instagram gespeichert und verarbeitet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Instagram erhält über die Instagram-Komponente immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              Instagram eingeloggt ist; dies findet unabhängig davon statt, ob
              die betroffene Person die Instagram-Komponente anklickt oder
              nicht. Ist eine derartige Übermittlung dieser Informationen an
              Instagram von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem Instagram-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Weitere Informationen und die geltenden Datenschutzbestimmungen
              von Instagram können unter{" "}
              <a
                target="blank"
                href="https://help.instagram.com/155833707900388"
              >
                https://help.instagram.com/155833707900388
              </a>{" "}
              und{" "}
              <a
                target="blank"
                href="https://www.instagram.com/about/legal/privacy/"
              >
                https://www.instagram.com/about/legal/privacy/
              </a>{" "}
              abgerufen werden.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            21. Datenschutzbestimmungen zu Einsatz und Verwendung von LinkedIn
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten der LinkedIn Corporation integriert.
              LinkedIn ist ein Internetbasiertes soziales Netzwerk, das eine
              Konnektierung der Nutzer mit bestehenden Geschäftskontakten sowie
              das Knüpfen von neuen Businesskontakten ermöglicht. Über 400
              Millionen registrierte Personen nutzen LinkedIn in mehr als 200
              Ländern. Damit ist LinkedIn derzeit die größte Plattform für
              Businesskontakte und eine der meistbesuchten Internetseiten der
              Welt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von LinkedIn ist die LinkedIn Corporation,
              2029 Stierlin Court Mountain View, CA 94043, USA. Für
              Datenschutzangelegenheiten außerhalb der USA ist LinkedIn Ireland,
              Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2,
              Ireland, zuständig.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Bei jedem einzelnen Abruf unserer Internetseite, die mit einer
              LinkedIn-Komponente (LinkedIn-Plug-In) ausgestattet ist,
              veranlasst diese Komponente, dass der von der betroffenen Person
              verwendete Browser eine entsprechende Darstellung der Komponente
              von LinkedIn herunterlädt. Weitere Informationen zu den
              LinkedIn-Plug-Ins können unter
              https://developer.linkedin.com/plugins abgerufen werden. Im Rahmen
              dieses technischen Verfahrens erhält LinkedIn Kenntnis darüber,
              welche konkrete Unterseite unserer Internetseite durch die
              betroffene Person besucht wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei LinkedIn eingeloggt
              ist, erkennt LinkedIn mit jedem Aufruf unserer Internetseite durch
              die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht.
              Diese Informationen werden durch die LinkedIn-Komponente gesammelt
              und durch LinkedIn dem jeweiligen LinkedIn-Account der betroffenen
              Person zugeordnet. Betätigt die betroffene Person einen auf
              unserer Internetseite integrierten LinkedIn-Button, ordnet
              LinkedIn diese Information dem persönlichen LinkedIn-Benutzerkonto
              der betroffenen Person zu und speichert diese personenbezogenen
              Daten.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              LinkedIn erhält über die LinkedIn-Komponente immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufes unserer Internetseite gleichzeitig bei
              LinkedIn eingeloggt ist; dies findet unabhängig davon statt, ob
              die betroffene Person die LinkedIn-Komponente anklickt oder nicht.
              Ist eine derartige Übermittlung dieser Informationen an LinkedIn
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem LinkedIn-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              LinkedIn bietet unter{" "}
              <a
                target="blank"
                href="https://www.linkedin.com/psettings/guest-controls"
              >
                https://www.linkedin.com/psettings/guest-controls
              </a>{" "}
              die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und
              zielgerichtete Anzeigen abzubestellen sowie Anzeigen-Einstellungen
              zu verwalten. LinkedIn nutzt ferner Partner wie Quantcast, Google
              Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua und
              Lotame, die Cookies setzen können. Solche Cookies können unter{" "}
              <a
                target="blank"
                href="https://www.linkedin.com/legal/cookie-policy"
              >
                https://www.linkedin.com/legal/cookie-policy
              </a>{" "}
              abgelehnt werden. Die geltenden Datenschutzbestimmungen von
              LinkedIn sind unter https://www.linkedin.com/legal/privacy-policy
              abrufbar. Die Cookie-Richtlinie von LinkedIn ist unter
              https://www.linkedin.com/legal/cookie-policy abrufbar.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} mb={2}>
          <Typography>
            22. Datenschutzbestimmungen zu Einsatz und Verwendung von Twitter
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von Twitter integriert. Twitter ist ein
              multilingualer öffentlich zugänglicher Mikroblogging-Dienst, auf
              welchem die Nutzer sogenannte Tweets, also Kurznachrichten, die
              auf 280 Zeichen begrenzt sind, veröffentlichen und verbreiten
              können. Diese Kurznachrichten sind für jedermann, also auch für
              nicht bei Twitter angemeldete Personen abrufbar. Die Tweets werden
              aber auch den sogenannten Followern des jeweiligen Nutzers
              angezeigt. Follower sind andere Twitter-Nutzer, die den Tweets
              eines Nutzers folgen. Ferner ermöglicht Twitter über Hashtags,
              Verlinkungen oder Retweets die Ansprache eines breiten Publikums.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von Twitter International Company, One
              Cumberland Place, Fenian Street Dublin 2, D02 AX07, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine Twitter-Komponente (Twitter-Button)
              integriert wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Twitter-Komponente veranlasst,
              eine Darstellung der entsprechenden Twitter-Komponente von Twitter
              herunterzuladen. Weitere Informationen zu den Twitter-Buttons sind
              unter https://about.twitter.com/de/resources/buttons abrufbar. Im
              Rahmen dieses technischen Verfahrens erhält Twitter Kenntnis
              darüber, welche konkrete Unterseite unserer Internetseite durch
              die betroffene Person besucht wird. Zweck der Integration der
              Twitter-Komponente ist es, unseren Nutzern eine Weiterverbreitung
              der Inhalte diese Internetseite zu ermöglichen, diese
              Internetseite in der digitalen Welt bekannt zu machen und unsere
              Besucherzahlen zu erhöhen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei Twitter eingeloggt
              ist, erkennt Twitter mit jedem Aufruf unserer Internetseite durch
              die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht.
              Diese Informationen werden durch die Twitter-Komponente gesammelt
              und durch Twitter dem jeweiligen Twitter-Account der betroffenen
              Person zugeordnet. Betätigt die betroffene Person einen der auf
              unserer Internetseite integrierten Twitter-Buttons, werden die
              damit übertragenen Daten und Informationen dem persönlichen
              Twitter-Benutzerkonto der betroffenen Person zugeordnet und von
              Twitter gespeichert und verarbeitet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Twitter erhält über die Twitter-Komponente immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              Twitter eingeloggt ist; dies findet unabhängig davon statt, ob die
              betroffene Person die Twitter-Komponente anklickt oder nicht. Ist
              eine derartige Übermittlung dieser Informationen an Twitter von
              der betroffenen Person nicht gewollt, kann diese die Übermittlung
              dadurch verhindern, dass sie sich vor einem Aufruf unserer
              Internetseite aus ihrem Twitter-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die geltenden Datenschutzbestimmungen von Twitter sind unter{" "}
              <a target="blank" href="https://twitter.com/privacy?lang=de">
                https://twitter.com/privacy?lang=de
              </a>{" "}
              abrufbar.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            23. Datenschutzbestimmungen zu Einsatz und Verwendung von Xing
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von Xing integriert. Xing ist ein
              Internetbasiertes soziales Netzwerk, das die Konnektierung der
              Nutzer mit bestehenden Geschäftskontakten sowie das Knüpfen von
              neuen Businesskontakten ermöglicht. Die einzelnen Nutzer können
              bei Xing ein persönliches Profil von sich anlegen. Unternehmen
              können beispielsweise Unternehmensprofile erstellen oder
              Stellenangebote auf Xing veröffentlichen.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von Xing ist die XING SE, Dammtorstraße 30,
              20354 Hamburg, Germany.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine Xing-Komponente (Xing-Plug-In) integriert
              wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige Xing-Komponente veranlasst, eine
              Darstellung der entsprechenden Xing-Komponente von Xing
              herunterzuladen. Weitere Informationen zum den Xing-Plug-Ins
              können unter https://dev.xing.com/plugins abgerufen werden. Im
              Rahmen dieses technischen Verfahrens erhält Xing Kenntnis darüber,
              welche konkrete Unterseite unserer Internetseite durch die
              betroffene Person besucht wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei Xing eingeloggt ist,
              erkennt Xing mit jedem Aufruf unserer Internetseite durch die
              betroffene Person und während der gesamten Dauer des jeweiligen
              Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite
              unserer Internetseite die betroffene Person besucht. Diese
              Informationen werden durch die Xing-Komponente gesammelt und durch
              Xing dem jeweiligen Xing-Account der betroffenen Person
              zugeordnet. Betätigt die betroffene Person einen der auf unserer
              Internetseite integrierten Xing-Buttons, beispielsweise den
              „Share“-Button, ordnet Xing diese Information dem persönlichen
              Xing-Benutzerkonto der betroffenen Person zu und speichert diese
              personenbezogenen Daten.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Xing erhält über die Xing-Komponente immer dann eine Information
              darüber, dass die betroffene Person unsere Internetseite besucht
              hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer
              Internetseite gleichzeitig bei Xing eingeloggt ist; dies findet
              unabhängig davon statt, ob die betroffene Person die
              Xing-Komponente anklickt oder nicht. Ist eine derartige
              Übermittlung dieser Informationen an Xing von der betroffenen
              Person nicht gewollt, kann diese die Übermittlung dadurch
              verhindern, dass sie sich vor einem Aufruf unserer Internetseite
              aus ihrem Xing-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die von Xing veröffentlichten Datenschutzbestimmungen, die unter
              https://www.xing.com/privacy abrufbar sind, geben Aufschluss über
              die Erhebung, Verarbeitung und Nutzung personenbezogener Daten
              durch Xing. Ferner hat Xing unter
              https://www.xing.com/app/share?op=data_protection
              Datenschutzhinweise für den XING-Share-Button veröffentlicht.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            24. Datenschutzbestimmungen zu Einsatz und Verwendung von YouTube
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von YouTube integriert. YouTube ist ein
              Internet-Videoportal, dass Video-Publishern das kostenlose
              Einstellen von Videoclips und anderen Nutzern die ebenfalls
              kostenfreie Betrachtung, Bewertung und Kommentierung dieser
              ermöglicht. YouTube gestattet die Publikation aller Arten von
              Videos, weshalb sowohl komplette Film- und Fernsehsendungen, aber
              auch Musikvideos, Trailer oder von Nutzern selbst angefertigte
              Videos über das Internetportal abrufbar sind.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Betreibergesellschaft von YouTube ist die Google Ireland Limited,
              Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine YouTube-Komponente (YouTube-Video) integriert
              wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige YouTube-Komponente veranlasst,
              eine Darstellung der entsprechenden YouTube-Komponente von YouTube
              herunterzuladen. Weitere Informationen zu YouTube können unter{" "}
              <a target="blank" href="https://www.youtube.com/yt/about/de/">
                https://www.youtube.com/yt/about/de
              </a>{" "}
              abgerufen werden. Im Rahmen dieses technischen Verfahrens erhalten
              YouTube und Google Kenntnis darüber, welche konkrete Unterseite
              unserer Internetseite durch die betroffene Person besucht wird.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt
              ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein
              YouTube-Video enthält, welche konkrete Unterseite unserer
              Internetseite die betroffene Person besucht. Diese Informationen
              werden durch YouTube und Google gesammelt und dem jeweiligen
              YouTube-Account der betroffenen Person zugeordnet.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              YouTube und Google erhalten über die YouTube-Komponente immer dann
              eine Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              YouTube eingeloggt ist; dies findet unabhängig davon statt, ob die
              betroffene Person ein YouTube-Video anklickt oder nicht. Ist eine
              derartige Übermittlung dieser Informationen an YouTube und Google
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem YouTube-Account ausloggt.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2} pl={2}>
            <Typography>
              Die von YouTube veröffentlichten Datenschutzbestimmungen, die
              unter{" "}
              <a
                target="blank"
                href="https://www.google.de/intl/de/policies/privacy/"
              >
                https://www.google.de/intl/de/policies/privacy/
              </a>{" "}
              abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung
              und Nutzung personenbezogener Daten durch YouTube und Google.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>25. Rechtsgrundlage der Verarbeitung</Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Art. 6 I lit. a DS-GVO dient unserem Unternehmen als
              Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine
              Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist
              die Verarbeitung personenbezogener Daten zur Erfüllung eines
              Vertrags, dessen Vertragspartei die betroffene Person ist,
              erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen
              der Fall ist, die für eine Lieferung von Waren oder die Erbringung
              einer sonstigen Leistung oder Gegenleistung notwendig sind, so
              beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt
              für solche Verarbeitungsvorgänge die zur Durchführung
              vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von
              Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser
              Unternehmen einer rechtlichen Verpflichtung durch welche eine
              Verarbeitung von personenbezogenen Daten erforderlich wird, wie
              beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert
              die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen
              könnte die Verarbeitung von personenbezogenen Daten erforderlich
              werden, um lebenswichtige Interessen der betroffenen Person oder
              einer anderen natürlichen Person zu schützen. Dies wäre
              beispielsweise der Fall, wenn ein Besucher in unserem Betrieb
              verletzt werden würde und daraufhin sein Name, sein Alter, seine
              Krankenkassendaten oder sonstige lebenswichtige Informationen an
              einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben
              werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d
              DS-GVO beruhen. Letztlich könnten Verarbeitungsvorgänge auf Art. 6
              I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren
              Verarbeitungsvorgänge, die von keiner der vorgenannten
              Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung
              eines berechtigten Interesses unseres Unternehmens oder eines
              Dritten erforderlich ist, sofern die Interessen, Grundrechte und
              Grundfreiheiten des Betroffenen nicht überwiegen. Solche
              Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet,
              weil sie durch den Europäischen Gesetzgeber besonders erwähnt
              wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes
              Interesse anzunehmen sein könnte, wenn die betroffene Person ein
              Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            26. Berechtigte Interessen an der Verarbeitung, die von dem
            Verantwortlichen oder einem Dritten verfolgt werden
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I
              lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung
              unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer
              Mitarbeiter und unserer Anteilseigner.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            27. Dauer, für die die personenbezogenen Daten gespeichert werden
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Das Kriterium für die Dauer der Speicherung von personenbezogenen
              Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach
              Ablauf der Frist werden die entsprechenden Daten routinemäßig
              gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
              Vertragsanbahnung erforderlich sind.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            28. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung
            der personenbezogenen Daten; Erforderlichkeit für den
            Vertragsabschluss; Verpflichtung der betroffenen Person, die
            personenbezogenen Daten bereitzustellen; mögliche Folgen der
            Nichtbereitstellung
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Wir klären Sie darüber auf, dass die Bereitstellung
              personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist
              (z.B. Steuervorschriften) oder sich auch aus vertraglichen
              Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
              Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass
              eine betroffene Person uns personenbezogene Daten zur Verfügung
              stellt, die in der Folge durch uns verarbeitet werden müssen. Die
              betroffene Person ist beispielsweise verpflichtet uns
              personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit
              ihr einen Vertrag abschließt. Eine Nichtbereitstellung der
              personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem
              Betroffenen nicht geschlossen werden könnte. Vor einer
              Bereitstellung personenbezogener Daten durch den Betroffenen muss
              sich der Betroffene an den Datenschutzbeauftragten wenden. Der
              Datenschutzbeauftragte klärt den Betroffenen einzelfallbezogen
              darüber auf, ob die Bereitstellung der personenbezogenen Daten
              gesetzlich oder vertraglich vorgeschrieben oder für den
              Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht,
              die personenbezogenen Daten bereitzustellen, und welche Folgen die
              Nichtbereitstellung der personenbezogenen Daten hätte.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography>
            29. Bestehen einer automatisierten Entscheidungsfindung
          </Typography>
          <Grid item xs={12} mb={2} pl={2} mt={2}>
            <Typography>
              Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
              automatische Entscheidungsfindung oder ein Profiling.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Privacy;
