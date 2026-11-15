import test from 'node:test';
import assert from 'node:assert/strict';
import {
  typewriterTitles,
  heroDescription,
  coreServices,
  personalProfileInfo,
  workExperiences,
  testimonials,
  educationItems,
  interestsData,
  convertGoogleDriveLink,
  getCategoryLabel
} from './portfolioData';

test('typewriterTitles matches exact subtitles from user profile screenshots', () => {
  assert.deepEqual(typewriterTitles, [
    'IT Support Specialist',
    'IT Administration',
    'Technical Support',
    'Web Development',
    'IT Consulting',
    'Office Operations',
    'Helping Businesses Solve Technology Challenges'
  ]);
});

test('personalProfileInfo contains verified profile bio, workplace, and personal details', () => {
  assert.equal(personalProfileInfo.fullName, 'Md. Istiak Islam');
  assert.equal(
    personalProfileInfo.bio,
    'Versatile IT & Ops pro skilled in tech support, CRM, and admin. Driven to fuel growth via technology.'
  );
  assert.equal(personalProfileInfo.birthday, 'October 19');
  assert.equal(personalProfileInfo.hometown, 'Rajshahi');
  assert.equal(personalProfileInfo.instagram, 'istiakislam_');
  assert.deepEqual(personalProfileInfo.openToWorkRoles, [
    'Administrative Assistant',
    'Assistant Manager',
    'Computer Operator'
  ]);
});

test('workExperiences contains all 6 exact workplaces and roles from work screenshot', () => {
  assert.equal(workExperiences.length, 6);

  const companies = workExperiences.map((w) => w.company);
  assert.deepEqual(companies, [
    'Health Wealth & Career Buildup Corner',
    'JBDIT',
    'Hello Istiak',
    'Selim English Education',
    'Hello DXN',
    'Alamgir Swimming Club'
  ]);

  assert.equal(workExperiences[0].role, 'Information Technology Analyst (IT Analyst)');
  assert.equal(workExperiences[0].period, 'Feb 6, 2021 - Present');
  assert.equal(workExperiences[1].role, 'IT Support Admin');
  assert.equal(workExperiences[1].period, 'Feb 17, 2024 - Present');
  assert.equal(workExperiences[2].role, 'IT Project Manager');
  assert.equal(workExperiences[3].role, 'Manager');
  assert.equal(workExperiences[4].role, 'Managing editor');
  assert.equal(workExperiences[5].role, 'Swimmer');
});

test('heroDescription and coreServices reflect user profession and services on the Homepage', () => {
  assert.ok(heroDescription.includes('IT Support Specialist'));
  assert.ok(heroDescription.includes('IT Administrator'));
  assert.ok(heroDescription.includes('Web Developer'));
  assert.equal(coreServices.length, 6);
  const serviceTitles = coreServices.map((s) => s.title);
  assert.deepEqual(serviceTitles, [
    'IT Support & Technical Troubleshooting',
    'IT Administration & System Management',
    'Office Operations & CRM Management',
    'Web Design & Full-Stack Development',
    'IT Consulting & Technology Solutions',
    'Hardware Engineering & Office Setups'
  ]);
});

test('testimonials are completely replaced with 8 new service-related reviews', () => {
  assert.equal(testimonials.length, 8);
  const ids = testimonials.map((t) => t.id);
  assert.deepEqual(ids, [101, 102, 103, 104, 105, 106, 107, 108]);
  const badges = testimonials.map((t) => t.badge);
  assert.deepEqual(badges, [
    'IT Support & Troubleshooting',
    'IT Administration & Office Ops',
    'Web Development Service',
    'IT Consulting & Strategy',
    'Technical Support & Hardware',
    'CRM & Admin Automation',
    'Network & Server Administration',
    'Web Portal & Ongoing IT Support'
  ]);
});

test('educationItems includes Class of 2024 for Rajshahi Court College and Bangla Masjid Mission Academy title', () => {
  assert.equal(educationItems.length, 4);
  assert.equal(educationItems[0].institution, 'Rajshahi Court College, Rajshahi.');
  assert.equal(educationItems[0].classYear, 'Class of 2024');
  assert.equal(
    educationItems[3].institution,
    'মসজিদ মিশন একাডেমী, রাজশাহী- Masjid Mission Academy, Rajshahi'
  );
});

test('interestsData matches hobbies, TV shows, and movies from screenshot', () => {
  assert.deepEqual(interestsData.hobbies, [
    'Technology',
    'Planting',
    'Personal development',
    'Traveling'
  ]);
  assert.deepEqual(interestsData.tvShows, [
    'National Geographic Explorer',
    'Man Vs. Wild',
    'Action movies',
    'Cartoon',
    'The Kapil Sharma Show.'
  ]);
  assert.deepEqual(interestsData.movies, [
    '3 Idiots',
    'Train To Busan',
    'Interstellar'
  ]);
});

test('helper functions convertGoogleDriveLink and getCategoryLabel work accurately', () => {
  assert.equal(
    convertGoogleDriveLink('https://drive.google.com/file/d/1ABCdef_123/view'),
    'https://lh3.googleusercontent.com/d/1ABCdef_123=s1600'
  );
  assert.equal(getCategoryLabel('infrastructure'), 'Server Labs & Setups');
});
