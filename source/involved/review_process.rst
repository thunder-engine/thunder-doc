.. _review_process:

Documentation Review Process
============================

This guide describes the pull request (PR) review process for Thunder Engine documentation.

PR Lifecycle
------------

.. mermaid::
   :caption: Review Process

   graph LR
       A[PR Created] --> B[Automated Checks]
       B --> C[Reviewer Assigned]
       C --> D[Review]
       D --> E{Changes Needed?}
       E -->|Yes| F[Author Makes Updates]
       F --> D
       E -->|No| G[Merge]
       G --> H[Published]

Creating a Pull Request
-----------------------

**PR Title**

Use the format: ``docs: brief description of changes``

Examples:

*   `docs: fix typos in Camera documentation`
*   `docs: add documentation for AudioSource`
*   `docs: update mesh import settings`

**PR Description**

In the description, include:

*   What was changed
*   Reason for the changes
*   Links to related issues (if any)
*   Screenshots of changes (for visual changes)

Description template:

.. code-block:: markdown

    ## Changes
    - Added documentation for the Camera component
    - Fixed code examples in the Rendering section
    
    ## Reason
    The Camera component was not documented
    
    ## Screenshots
    ![Screenshot](url)
    
    ## Related Issues
    Closes #123

Automated Checks
----------------

When a PR is created, automated checks are run:

1. **Sphinx build** — verifies that the documentation builds without errors
2. **Link checker** — verifies that all links work
3. **Spell checker** — checks spelling (basic)

If any of these checks fail, the PR cannot be accepted.

Review Process
--------------

**What the Reviewer Checks**

*   Compliance with the :ref:`style_guide`
*   Correctness of technical information
*   Relevance of code examples
*   Presence of all required sections
*   Functionality of links
*   Spelling and grammar

**Roles**

*   **Author** — the author of the changes
*   **Reviewer** — reviewer (documentation maintainer)
*   **Maintainer** — final merge (usually the same as the reviewer)

**Timings**

*   Initial response from reviewer: within 2-3 days
*   Author updates: within 5-7 days
*   Follow-up review: within 1-2 days

Acceptance Criteria
-------------------

A PR is accepted if:

*   ✅ All automated checks pass
*   ✅ Documentation builds without errors
*   ✅ Style guide is followed
*   ✅ Technical information is correct
*   ✅ No spelling errors
*   ✅ All links work
*   ✅ PR is approved by the reviewer

A PR is rejected if:

*   ❌ Automated checks fail
*   ❌ Contains technically incorrect information
*   ❌ Violates the style guide
*   ❌ Contains plagiarism
*   ❌ Is not related to Thunder Engine documentation

Review Comments
---------------

**Types of Comments**

*   **Blocking** — requires mandatory correction before merging
*   **Non-blocking** — recommendation that does not block merging
*   **Question** — requires clarification from the author

**Comment Examples**

Blocking:

> ❌ The default value for the `fov` property is not specified. Please add it.

Non-blocking:

> 💡 You could add an example of using this method.

Question:

> ❓ What is the maximum value for `nearPlane`? Is this limited by the engine?

How to Respond to Comments
--------------------------

1. **Agree with the change** — make the correction and mark the comment as resolved
2. **Disagree** — explain the reason in your response
3. **Need clarification** — ask a question in your response

PR Updates
----------

After receiving comments:

1. Make changes in your branch
2. Create a new commit (do not use squash until final merge)
3. Respond to comments, marking fixed ones as resolved
4. Push the changes — the PR will update automatically

PR Merge
--------

After receiving approval:

*   The maintainer performs squash and merge
*   The commit should have a descriptive message
*   The author's branch is deleted (optional)

Conflict of Interest
--------------------

If you are both the author and the reviewer:

*   A second reviewer is required
*   Another maintainer performs the merge

Review Etiquette
----------------

**For Authors**

* Respond to comments politely and constructively
* Do not take criticism personally
* Explain your decisions if you disagree with a change
* Do not push changes during review unnecessarily

**For Reviewers**

* Be polite and constructive
* Explain why you are suggesting changes
* Point out what was done well, not just problems
* Do not delay the review unnecessarily

Useful Links
------------

* `How to Write Good Commits <https://www.conventionalcommits.org/>`_
* `GitHub Flow <https://guides.github.com/introduction/flow/>`_
* `How to Conduct Code Review <https://google.github.io/eng-practices/review/>`_ (adapted for documentation)