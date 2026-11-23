/* ============================================================
   CONFIG — every rule, badge, persona, and decision area lives
   here so leadership revisions don’t require touching layout.
   All content is PROPOSED and all people/dates are EXAMPLES.
   ============================================================ */
const CONFIG = {
  colors: { blue:'#002D72', deep:'#001A45', green:'#8FAD15', green2:'#A9C23F', earned:'#1F5FAE', white:'#FFFFFF' },

  tiers: {
    legacy:        { name:'Legacy',        sub:'Service recognition',   shape:'crest', desc:'Annual anniversary patches.', how:'Awarded from the HR record on each work anniversary.', patch:'Service patch every year' },
    earned:        { name:'Earned',        sub:'Demonstrated ability',  shape:'hex',    desc:'Achievements requiring verified skill development or competency.', how:'Learning records, assessments, or manager sign-off.', patch:'Digital badge only' },
    distinguished: { name:'Distinguished', sub:'Sustained excellence',  shape:'shield', desc:'Achievements requiring meaningful results over time or demonstrated contributions.', how:'Results over time plus management review.', patch:'Distinguished patch' },
    exceptional:   { name:'Exceptional',   sub:'Significant impact',    shape:'seal',   desc:'Selective recognition for uncommon contributions or company-wide impact.', how:'Nomination and leadership panel review.', patch:'Exceptional patch' }
  },

  types: [
    { id:'all',           label:'All types' },
    { id:'digital',       label:'Digital only' },
    { id:'service',       label:'Annual service patch' },
    { id:'distinguished', label:'Distinguished patch' },
    { id:'exceptional',   label:'Exceptional & limited' }
  ],

  collections: [
    { id:'legacy',     name:'Legacy & Loyalty',      blurb:'Annual service patches, visually connected year to year.' },
    { id:'knowledge',  name:'Knowledge & Mastery',   blurb:'Learning, skills, and systems expertise.' },
    { id:'excellence', name:'Excellence & Impact',   blurb:'Quality, results, and new ideas.' },
    { id:'leadership', name:'Leadership & Growth',   blurb:'Leading, coaching, and mentoring in any role.' },
    { id:'culture',    name:'Culture & Community',   blurb:'Values, collaboration, and community.' },
    { id:'special',    name:'Special Achievements',  blurb:'Launches, challenges, and lasting contributions.' }
  ],

  /* Patch rule (proposed): Legacy = annual service patch; Earned = digital only;
     Distinguished and Exceptional = physical patch. Every patch also has a digital twin. */
  badges: [
    ...[1,2,3,4,5,6,7,8,9,10,15,20,25].map(n => ({
      id:'y'+n, coll:'legacy', tier:'legacy', year:n, name:'Year '+n, milestone: n % 5 === 0,
      criteria:`Complete ${n} year${n>1?'s':''} of service with Cortland.` + (n % 5 === 0 ? ' Milestone edition with an added outer ring.' : ''),
      evidence:['Hire date and service record in UKG (HR system of record)']
    })),
    { id:'core',     coll:'knowledge', tier:'earned', glyph:'core',   name:'Cortland Core Master', criteria:'Complete every Cortland Core module and pass the final knowledge check.', evidence:['Learning system completion record','Knowledge check result'] },
    { id:'skill',    coll:'knowledge', tier:'earned', glyph:'wrench', name:'Skill Specialist', criteria:'Demonstrate a role-specific skill, such as renewals, screening, or HVAC, in a manager-observed skills check.', evidence:['Skills checklist signed by manager'] },
    { id:'systems',  coll:'knowledge', tier:'earned', glyph:'gear',   name:'Systems Expert', criteria:'Show advanced, accurate use of a core system (OneSite, Funnel, UKG, and others) and support peers with it for 90 days.', evidence:['System proficiency assessment','Peer-support log or manager attestation'] },
    { id:'cross',    coll:'knowledge', tier:'earned', glyph:'swap',   name:'Cross-Training Champion', criteria:'Complete cross-training in a second function and cover it successfully at least three times.', evidence:['Cross-training checklist','Coverage dates confirmed by manager'] },
    { id:'comm',     coll:'knowledge', tier:'earned', glyph:'chat',   name:'Communication Pro', criteria:'Complete the communication learning path and apply it in observed resident or team interactions.', evidence:['Learning record','Manager observation notes'] },
    { id:'rx',       coll:'knowledge', tier:'distinguished', glyph:'home', name:'Resident Experience Expert', criteria:'Sustain resident-experience results at or above the role standard for two consecutive quarters, and share practices with the team.', evidence:['Resident feedback or survey results','Manager review'] },

    { id:'eia',      coll:'excellence', tier:'distinguished', glyph:'star', name:'Excellence in Action', criteria:'Deliver a documented result that measurably improves a team, community, or process goal.', evidence:['Before-and-after results','Manager nomination'] },
    { id:'quality',  coll:'excellence', tier:'earned', glyph:'check', name:'Quality Champion', criteria:'Meet the quality-audit standard for your role on three consecutive audits.', evidence:['Audit results'] },
    { id:'solver',   coll:'excellence', tier:'earned', glyph:'puzzle', name:'Problem Solver', criteria:'Identify and resolve a recurring issue, with the fix adopted by your team.', evidence:['Issue summary','Manager confirmation'] },
    { id:'consist',  coll:'excellence', tier:'distinguished', glyph:'repeat', name:'Consistency Counts', criteria:'Meet annual goals for two consecutive review cycles.', evidence:['Annual review records'] },
    { id:'service',  coll:'excellence', tier:'distinguished', glyph:'heart', name:'Service Excellence', criteria:'Sustain service results above the role standard for two quarters, confirmed by resident or customer feedback.', evidence:['KPI report (e.g., Power BI)','Feedback summary'] },
    { id:'innov',    coll:'excellence', tier:'exceptional', glyph:'bulb', name:'Innovation Pioneer', criteria:'Originate an idea that is piloted and then adopted beyond your own team.', evidence:['Pilot results','Leadership sponsor confirmation'] },

    { id:'emerging', coll:'leadership', tier:'earned', glyph:'chevrons', name:'Emerging Leader', criteria:'Complete the emerging-leader learning path and lead one team initiative.', evidence:['Learning record','Manager confirmation'] },
    { id:'mentor',   coll:'leadership', tier:'distinguished', glyph:'people', name:'Mentor', criteria:'Mentor at least two associates through onboarding or a development goal over six months.', evidence:['Mentee confirmations','Manager review'] },
    { id:'coach',    coll:'leadership', tier:'earned', glyph:'target', name:'Peer Coach', criteria:'Complete peer-coach training and hold at least four documented coaching sessions.', evidence:['Training record','Session log'] },
    { id:'builder2', coll:'leadership', tier:'distinguished', glyph:'blocks', name:'Team Builder', criteria:'Build or lead a team, formally or informally, that sustains engagement and goal results for a year.', evidence:['Team results','Leader review'] },
    { id:'lia',      coll:'leadership', tier:'distinguished', glyph:'flag', name:'Leadership in Action', criteria:'Lead a cross-team project from plan to measurable result, in any role.', evidence:['Project summary','Sponsor confirmation'] },

    { id:'commch',   coll:'culture', tier:'earned', glyph:'pin', name:'Community Champion', criteria:'Organize or lead at least two community or resident events in a year.', evidence:['Event records'] },
    { id:'onec',     coll:'culture', tier:'earned', glyph:'rings', name:'One Cortland Collaborator', criteria:'Partner with another team or department on shared work with a documented outcome.', evidence:['Partner team confirmation'] },
    { id:'culture',  coll:'culture', tier:'distinguished', glyph:'sun', name:'Culture Champion', criteria:'Model Cortland values over a full year, recognized through peer nominations.', evidence:['Peer nominations','Leader review'] },
    { id:'above',    coll:'culture', tier:'exceptional', glyph:'up', name:'Above & Beyond', criteria:'Recognized for an uncommon act of service or support well beyond the role.', evidence:['Nomination','Recognition panel review'] },

    { id:'launch',   coll:'special', tier:'earned', glyph:'rocket', name:'Launch Crew', limited:true, criteria:'Take part in a defined launch, such as a new community opening or system rollout. Time-bound edition.', evidence:['Project roster'] },
    { id:'challenge',coll:'special', tier:'earned', glyph:'trophy', name:'Challenge Champion', criteria:'Complete a department-specific challenge during its open window.', evidence:['Challenge results'] },
    { id:'lbuilder', coll:'special', tier:'exceptional', glyph:'columns', name:'Legacy Builder', criteria:'Make a contribution that lasts, such as a program, tool, or practice still in use a year later.', evidence:['Adoption evidence','Leadership review'] },
    { id:'impact',   coll:'special', tier:'exceptional', glyph:'burst', name:'Exceptional Impact', criteria:'Selective recognition for company-wide impact, awarded by a leadership panel.', evidence:['Nomination','Leadership panel decision'] }
  ],

  /* ---------- Two-tier jacket milestones (proposed, not approved) ---------- */
  jackets: {
    denim: {
      name:'The Cortlandian Denim Jacket', short:'Denim Jacket', years:5, tier:'Five Years',
      message:'Five years of showing up, growing, and making a difference.',
      tagline:'Your commitment deserves recognition.',
      statement:'Five Years. Your Story Is Just Beginning.',
      support:'Your Cortlandian Denim Jacket celebrates five years of commitment, consistency, and growth. Every achievement you’ve earned along the way is part of your story.',
      design:['Dark indigo denim, modern unisex cut','Small embroidered Cortlandian insignia on the chest pocket','Contrast stitching in COE Yellow','Standard patch zones on both sleeves, front panels, and back'],
      qualify:['Five completed years of service','Satisfactory annual goal attainment','Demonstrated consistency','Documented professional growth','Verification through an approved process'],
      notRequired:'Promotions and distinguished achievement patches are not required. Growth can mean new skills, stronger proficiency, expanded responsibilities, mentorship, or meaningful contributions.',
      fulfillment:['Size range and fit sampling before launch','Gifted at or near the fifth anniversary','Funded by the assigned community or department cost center (proposed)']
    },
    letterman: {
      name:'The Cortland Legacy Letterman', short:'Letterman Jacket', years:10, tier:'Ten Years',
      message:'A decade of dedication. A legacy worth wearing.',
      tagline:'Your legacy deserves to be worn.',
      statement:'Ten Years. A Legacy Worth Wearing.',
      support:'The Cortland Legacy Letterman celebrates a decade of commitment, growth, and meaningful contribution. It represents the impact you’ve made and the journey you’ve built.',
      design:['Cortland navy body with stone-neutral sleeves','Green and white rib trim at collar, cuffs, and hem','Premium embroidered Ten-Year crest on the chest','Large back placement for the Cortlandian Legacy crest'],
      qualify:['Ten completed years of service','Satisfactory annual goal attainment under approved criteria','Documented consistency and continued professional growth','Verification by authorized program owners'],
      notRequired:'Not required: promotion, management experience, competitive rankings, or distinguished patches. An associate who stays in the same role, becomes highly proficient, and consistently meets expectations has an equal path.',
      fulfillment:['Higher unit cost; consider made-to-order batches','Gifted at or near the tenth anniversary','Funded by the assigned community or department cost center (proposed)']
    }
  },

  /* Patch zones are identical on both jackets so every patch fits either one. */
  patchSpecs: [
    ['Standard patch','About 3 in. for sleeves and front panels'],
    ['Back recognition','About 4.5 in. for the large back placement'],
    ['Artwork','Five or fewer thread colors, merrowed edge'],
    ['Attachment to explore','Sew-on, hook-and-loop (removable), or heat-applied']
  ],

  personas: [
    { id:'consistent', name:'The Consistent Contributor', role:'Community Associate (example)', current:10,
      facts:['Ten years in the same role','Annual goals met each year','No promotions','No distinguished patches'],
      years:[
        ['met','Finished onboarding and the Cortland Core learning path.'],
        ['met','Cross-trained on renewals and covered the desk in peak season.'],
        ['met','Kept resident follow-up times within standard all year.'],
        ['met','Helped two new associates learn the move-in process.'],
        ['met','Took ownership of the community’s resident event calendar.'],
        ['met','Became the go-to person for the community’s move-in process.'],
        ['met','Kept resident satisfaction steady through a property renovation.'],
        ['met','Trained the team on an updated renewals workflow.'],
        ['met','Sustained goals through a change in community leadership.'],
        ['met','Recognized by peers as the community’s steady anchor.']
      ],
      milestones:{
        denim:     { status:'meets', fulfill:'Gifted at the Year 5 celebration (illustrative)' },
        letterman: { status:'meets', fulfill:'Gifted at the Year 10 celebration (illustrative)' }
      },
      note:'No promotion and no distinguished patches, and still both jackets. Consistency and growth in one role is a complete path.' },

    { id:'specialist', name:'The Growing Specialist', role:'Service Associate (example)', current:7,
      facts:['Year 7 of 10 complete','Annual goals met each year','Advanced expertise developed','Three distinguished patches'],
      years:[
        ['met','Completed safety and service onboarding.'],
        ['met','Earned an HVAC certification (example credential).'],
        ['met','Reduced repeat work orders across assigned buildings.', ['service']],
        ['met','Mentored two new service associates.', ['mentor']],
        ['met','Built a preventive-maintenance checklist the community adopted.'],
        ['met','Led a cross-community equipment upgrade.', ['eia']],
        ['met','Expanded scope to support a second property.'],
        ['upcoming'],['upcoming'],['upcoming']
      ],
      milestones:{
        denim:     { status:'meets', fulfill:'Delivered (illustrative)' },
        letterman: { status:'progress', fulfill:'Not started. Three anniversaries to go (illustrative)' }
      },
      note:'Distinguished patches travel on the jacket sleeves as their own recognition. They don’t change jacket eligibility.' },

    { id:'recovery', name:'The Growth & Recovery Journey', role:'Resident Services Associate (example)', current:10,
      facts:['Ten years of service','Year 2 below expectations, then a completed development plan','Approved leave in Year 7 with revised goals'],
      years:[
        ['met','Completed Resident Services onboarding.'],
        ['recovered','Fell below goals mid-year, then completed an approved development plan with documented improvement.'],
        ['met','Sustained the improved results for the full year.'],
        ['met','Became a go-to resource for lease renewal questions.'],
        ['met','Joined the pod’s peer-coaching rotation.'],
        ['met','Supported onboarding for a new pod.'],
        ['revised','Took approved leave; met revised goals for the time worked.'],
        ['met','Returned to full goals and met them.'],
        ['met','Led renewal training for new associates.'],
        ['met','Mentored a teammate through a development plan of their own.']
      ],
      milestones:{
        denim:     { status:'review', fulfill:'On hold until recovery criteria are approved' },
        letterman: { status:'review', fulfill:'On hold until revised-goal criteria are approved' }
      },
      note:'A single setback or approved leave should not automatically disqualify anyone. How development plans, revised goals, and leave are treated is pending leadership and HR review.' },

    { id:'tenured', name:'The Existing Tenured Associate', role:'Leasing Professional, 14 years at launch (example)', current:10,
      facts:['14 years of service before launch','Older goal records incomplete','Eligible for transitional review of both jackets'],
      years:[
        ['partial','Records limited; service verified in UKG.'],
        ['partial','Records limited; service verified in UKG.'],
        ['partial','Records limited; manager attestation available.'],
        ['met','Annual review on file.'],
        ['met','Annual review on file.'],
        ['met','Annual review on file; trained new leasing hires.'],
        ['met','Annual review on file.'],
        ['met','Annual review on file; led a lease-up.'],
        ['met','Annual review on file.'],
        ['met','Annual review on file.']
      ],
      milestones:{
        denim:     { status:'transition', fulfill:'Depends on the existing-tenure policy (Option A, B, or C)' },
        letterman: { status:'transition', fulfill:'Depends on the existing-tenure policy (Option A, B, or C)' }
      },
      note:'Years 11 to 14 continue with annual patches. Transitional review uses the documentation that exists and doesn’t assume every historical record is available.' }
  ],

  goalLabels:   { met:'Annual goals met', recovered:'Below expectations, then development plan completed', revised:'Revised goals met during approved leave', partial:'Historical records incomplete', upcoming:'Upcoming' },
  reviewLabels: { met:'Verified (example)', recovered:'Plan completion documented (example)', revised:'Leave and revised goals documented (example)', partial:'Transitional review (example)', upcoming:'Not yet reached' },
  milestoneStatus: {
    meets:      ['ok',   'Meets proposed criteria'],
    progress:   ['neutral','In progress'],
    review:     ['warn', 'Review required'],
    transition: ['warn', 'Transitional review']
  },

  /* Existing-tenure options: leadership must choose; none is selected by default. */
  tenureOptions: [
    { id:'A', name:'Both Jackets', short:'Both jackets',
      recognition:'Associates with 10+ years qualify for both the denim and the letterman jacket.',
      fulfillment:'Physical distribution may be phased over the chosen timeline.',
      fairness:'Matches what future associates will earn over ten years. Highest cost and largest fulfillment load.' },
    { id:'B', name:'Highest Milestone Jacket First', short:'Highest first',
      recognition:'Associates with 10+ years receive the letterman first. The denim is handled separately under an approved transition policy.',
      fulfillment:'Letterman jackets are scheduled in the plan; denim jackets for this group are an earned obligation with timing set later.',
      fairness:'Leads with the most meaningful milestone while keeping the denim obligation visible and owed.' },
    { id:'C', name:'Highest Milestone Jacket Only', short:'Highest only',
      recognition:'Associates with 10+ years receive the letterman as their initial physical recognition.',
      fulfillment:'One jacket per associate in this group; simplest to fulfill.',
      fairness:'Lowest cost, but long-tenured associates receive less than future associates. Must be explicitly approved and reviewed for fairness.' }
  ],

  /* Budget calculator defaults: hypothetical planning figures, not supplier quotes or headcount data. */
  budget: { denim:65, letter:180, new5:120, new10:45, ex59:400, ex10:150, years:3, central:25, option:'A', backlogFund:'hybrid', horizon:5 },
  backlogFunding: [
    { id:'central',    label:'Central transition fund' },
    { id:'costcenter', label:'Phased cost-center allocation' },
    { id:'hybrid',     label:'Hybrid (50/50)' }
  ],
  fundingTable: [
    ['Annual Cortlandian patches','Central recognition budget'],
    ['Distinguished achievement patches','Central program or sponsoring department'],
    ['Five-year denim jacket','Assigned community or department cost center'],
    ['Ten-year letterman jacket','Assigned community or department cost center'],
    ['Existing-tenure backlog','Central transition funding, phased cost-center allocation, or a hybrid']
  ],

  decisions: [
    { id:'d1', icon:'repeat',  title:'Denim milestone timing', q:'Is five years the appropriate milestone for the denim jacket?', status:'Proposed' },
    { id:'d2', icon:'columns', title:'Letterman milestone timing', q:'Is ten years the appropriate milestone for the letterman jacket, or should it be later?', status:'Proposed' },
    { id:'d3', icon:'check',   title:'Goal-consistency standards', q:'What goal-consistency requirements apply at each milestone?', status:'Open' },
    { id:'d4', icon:'people',  title:'Existing tenured associates', q:'How should existing tenured associates qualify?', status:'Open' },
    { id:'d5', icon:'scale',   title:'Both jackets or highest only', q:'Should existing 10+ year associates receive both jackets or only the highest milestone?', status:'Open' },
    { id:'d6', icon:'shield',  title:'Central funding share', q:'What percentage of jacket costs should be centrally funded?', status:'Open' },
    { id:'d7', icon:'blocks',  title:'Community and department billing', q:'Which expenses should be billed to communities or departments?', status:'Proposed' },
    { id:'d8', icon:'clock',   title:'Fulfillment phasing', q:'How should fulfillment be phased?', status:'Open' },
    { id:'d9', icon:'jacket',  title:'Designs and production', q:'Which jacket designs, patch placements, and production methods should be approved?', status:'Open' },
    { id:'d10',icon:'flag',    title:'Program ownership', q:'Which team owns ongoing program administration?', status:'Open' }
  ],
  stages:['Exploring','Reviewing','Approved','Ready for Launch'],

  principles: [
    { glyph:'shield', title:'Recognition Should Be Earned', text:'Physical achievement patches require verified accomplishments.' },
    { glyph:'repeat', title:'Consistency Matters', text:'The denim and letterman jackets recognize sustained commitment and successful annual goal attainment.' },
    { glyph:'sprout', title:'Growth Is Not Just Promotion', text:'Expertise, improvement, mentorship, and meaningful contribution are valued.' },
    { glyph:'pathways', title:'Every Role Has a Path', text:'Opportunities should exist across all departments and job families.' },
    { glyph:'notsale', title:'Recognition Is Not for Sale', text:'Patches and jackets are gifts from Cortland, never purchased, redeemed, or billed to associates.' },
    { glyph:'eye', title:'Progress Should Be Visible', text:'Associates should understand qualification requirements and track their development.' },
    { glyph:'scale', title:'Fairness Is Essential', text:'Criteria must account for role differences, goal changes, documented improvement, and appropriate employment protections.' }
  ],

  /* Companion dashboard example (fictional) */
  dash: {
    name:'Alex Morgan', role:'Resident Services Associate', initials:'AM', year:3, hire:'Sep 2023',
    digital:['y1','y2','y3','core','comm','cross','onec'],
    patches:[
      { id:'y1', when:'Sep 2024', status:'ok',   label:'Delivered' },
      { id:'y2', when:'Sep 2025', status:'ok',   label:'Delivered' },
      { id:'y3', when:'Sep 2026', status:'ship', label:'Verified, in fulfillment' },
      { id:'rx', when:'Submitted Oct 2026', status:'rev', label:'Awaiting manager review' }
    ],
    inProgress:[
      { id:'systems', pct:60, label:'54 of 90 days of peer support', reqs:[['done','Proficiency assessment passed'],['todo','90 days of peer support (54 so far)']] },
      { id:'coach',   pct:50, label:'2 of 4 coaching sessions', reqs:[['done','Peer-coach training complete'],['todo','4 documented sessions (2 so far)']] },
      { id:'y4',      pct:21, label:'Anniversary in Sep 2027', reqs:[['todo','Complete Year 4 of service']] }
    ],
    recommended:[
      { id:'mentor', why:'A new onboarding group starts next month.' },
      { id:'quality', why:'Two of three audits already meet standard.' },
      { id:'challenge', why:'Renewal Sprint is open through Dec 15.' }
    ],
    story:[
      ['Sep 2023','Joined Resident Services and completed onboarding'],
      ['Mar 2024','Finished the Cortland Core learning path'],
      ['Nov 2024','Cross-trained to cover a second pod'],
      ['Sep 2025','Met annual goals for Year 2'],
      ['Apr 2026','Partnered with Leasing Hub on a shared renewals workflow'],
      ['Sep 2026','Met annual goals for Year 3']
    ],
    history:[
      ['Sep 2026','Year 3 service patch','HR record'],
      ['Jul 2026','One Cortland Collaborator','Partner team lead'],
      ['Sep 2025','Year 2 service patch','HR record'],
      ['Jan 2025','Cross-Training Champion','Manager'],
      ['Sep 2024','Year 1 service patch','HR record']
    ]
  }
};

/* Patch artwork. Paths are relative to index.html.
   Years 1–3 use provided example art (not final). Add more years here,
   e.g. y4:'assets/patches/year-4.webp'; any year not listed falls back
   to the built-in crest placeholder. */
const PATCH_ART = {
  y1:'assets/patches/year-1.webp',
  y2:'assets/patches/year-2.webp',
  y3:'assets/patches/year-3.webp'
};

