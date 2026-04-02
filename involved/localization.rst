.. _localization:

Documentation Localization
==========================

Thunder Engine documentation supports multiple languages. Currently, English is the primary language, but we welcome translations to other languages. Localization is implemented using the **gettext** system, which allows translations to be maintained without duplicating the original RST files.

.. tip::
    If you want to translate the documentation into your language, contact the Thunder Engine team via GitHub Issues to coordinate efforts.

How Localization Works
----------------------

The localization system is based on **gettext** — a standard internationalization tool:

1. The original documentation is written in English in ``.rst`` files
2. Strings for translation are extracted from the source files into ``.pot`` files (templates)
3. For each language, ``.po`` files are created containing the translations
4. During build, Sphinx uses the ``.po`` files to generate documentation in the target language

Advantages of this approach:

*   No duplication of RST files for each language
*   Changes to the source documentation are easy to track
*   Translations are stored separately and can be updated independently

Project Structure
-----------------

.. code-block::
   thunder-doc/
   ├── basics/                   # Source RST files (in English)
   ├── rendering/
   ├── components/
   ├── locales/                  # Translations directory
   │   ├── ru/                   # Russian
   │   │   └── LC_MESSAGES/
   │   │       ├── basics.po
   │   │       ├── rendering.po
   │   │       └── ...
   │   └── zh/                   # Chinese translation
   │       └── LC_MESSAGES/
   ├── conf.py                   # Main configuration
   └── Makefile                  # Build

Adding a New Language
---------------------

Suppose you want to add a translation for Russian (language code ``ru``).

**Step 1: Install required tools**

.. code-block:: bash

    pip install sphinx sphinx-intl gettext

**Step 2: Create translation templates**

Create ``.pot`` templates from the source RST files:

.. code-block:: bash

    # Generate translation templates
    make gettext

**Step 3: Create translation files for the new language**

.. code-block:: bash

    # Create .po files for Russian
    sphinx-intl update -l ru

This command creates the structure:

.. code-block::
   locales/
   └── ru/
       └── LC_MESSAGES/
           ├── basics.po
           ├── rendering.po
           ├── components.po
           └── ...

**Step 4: Configure the build for the new language**

Edit the ``Makefile`` to add a target for the new language:

.. code-block:: makefile

    # Makefile
    
    # Build English version
    html-en:
        sphinx-build -b html -D language=en . _build/en
    
    # Build Russian version
    html-ru:
        sphinx-build -b html -D language=ru . _build/ru
    
    # Build all versions
    html-all: html-en html-ru html-zh

**Step 5: Configure Sphinx**

Ensure that ``conf.py`` is configured for languages:

.. code-block:: python

    # conf.py
    
    # Available languages
    language = 'en'  # Default
    
    # Directory with translations
    locale_dirs = ['locales/']
    
    # Disable compaction for proper link handling
    gettext_compact = False

Translation Process
-------------------

**Editing .po Files**

``.po`` files have the following format:

.. code-block:: po

    #: ../../basics/getting-started.rst:10
    msgid "Getting Started"
    msgstr "Начало работы"
    
    #: ../../basics/getting-started.rst:12
    msgid ""
    "Thunder Engine is a powerful game engine designed for modern game development."
    msgstr ""
    "Thunder Engine — это мощный игровой движок, разработанный для современной "
    "разработки игр."

Where:
*   ``msgid`` — source string in English
*   ``msgstr`` — translation to the target language (initially empty)

**What Needs Translation**

*   ✅ All text content (headings, paragraphs, lists)
*   ✅ Property and method descriptions
*   ✅ Comments in code examples
*   ✅ Warnings and notes (``.. note::``, ``.. tip::``)
*   ❌ Class, method, and property names (keep as in the API)
*   ❌ RST syntax (directives, roles)
*   ❌ Code (code examples themselves are not translated)

**Translation Conventions**

Terminology should be consistent. Key terms:

================== =====================
Term (English)     Translation (Russian)
================== =====================
Actor              Актер
Component          Компонент
Resource           Ресурс
Scene              Сцена
Mesh               Меш
Camera             Камера
Light              Свет
Material           Материал
Shader             Шейдер
Rendering          Рендеринг
Property           Свойство
Method             Метод
================== =====================

Verbs:

============== ===================
Verb           Translation (Russian)
============== ===================
create         создавать
load           загружать
save           сохранять
set            устанавливать
get            получать
enable         включать
disable        отключать
call           вызывать
============== ===================

**Tools for Translation**

For editing ``.po`` files, it is recommended to use:

*   **Poedit** (recommended for beginners)
    
    .. code-block:: bash
        # Install on Ubuntu
        sudo apt install poedit
        
        # macOS
        brew install poedit

*   **Lokalize** (for advanced users)
*   **Any text editor** — ``.po`` files can be edited in any text editor

**Translation Example**

Source file (``basics/getting-started.rst``):

.. code-block:: rst

    Getting Started
    ===============
    
    Thunder Engine is a powerful game engine designed for modern
    game development.

Corresponding ``.po`` file after translation to Russian:

.. code-block:: po

    #: ../../basics/getting-started.rst:1
    msgid "Getting Started"
    msgstr "Начало работы"
    
    #: ../../basics/getting-started.rst:3
    msgid ""
    "Thunder Engine is a powerful game engine designed for modern "
    "game development."
    msgstr ""
    "Thunder Engine — это мощный игровой движок, разработанный для современной "
    "разработки игр."

Checking the Translation
------------------------

**Building Localized Documentation**

.. code-block:: bash

    # Build Russian version
    make html-ru
    
    # Or directly via sphinx-build
    sphinx-build -b html -D language=ru . _build/ru

**Quality Check**

Before submitting a translation, verify:

*   [ ] All strings are translated (no empty ``msgstr``)
*   [ ] ``.po`` file syntax is correct:

    .. code-block:: bash
        msgfmt --check locales/ru/LC_MESSAGES/*.po

*   [ ] Documentation builds without errors:

    .. code-block:: bash
        make clean
        make html-ru

*   [ ] All links work (check in browser)
*   [ ] Terminology is consistent throughout the document
*   [ ] Code in examples is unchanged
*   [ ] Special characters and formatting are preserved

Submitting a Pull Request
-------------------------

**Step 1: Create a branch for the translation**

.. code-block:: bash

    git checkout -b docs/ru-translation

**Step 2: Add translation files to the repository**

.. code-block:: bash

    # Add .po files for Russian
    git add locales/ru/
    
    # Add changes to Makefile (if a build target was added)
    git add Makefile
    
    # Commit the changes
    git commit -m "docs: add Russian translation (initial)"

**Step 3: Push changes to GitHub**

.. code-block:: bash

    git push origin docs/ru-translation

**Step 4: Create a Pull Request**

When creating the PR, include in the description:

.. code-block:: markdown

    ## Localization: Russian
    
    ### What was done
    - Added Russian translation of the documentation
    - Created .po files in `locales/ru/LC_MESSAGES/`
    - Added `html-ru` build target to Makefile
    
    ### Translation status
    - [x] basics/ — 100%
    - [x] rendering/ — 100%
    - [ ] scripting/ — 50% (in progress)
    - [x] components/ — 100%
    
    ### Verification
    - [x] `msgfmt` passes without errors
    - [x] Documentation builds successfully
    - [x] All links work
    
    ### Screenshots
    ![Russian version build](url)

**Step 5: Respond to review comments**

After creating the PR, the reviewer will check:

*   Correctness of technical term translation
*   Translation quality (grammar, style)
*   Preservation of formatting
*   Link functionality

Updating Translations
---------------------

When the source documentation is updated, translations need to be updated as well:

**Step 1: Update templates**

.. code-block:: bash

    # Generate new templates
    sphinx-build -b gettext . _build/gettext

**Step 2: Update existing translations**

.. code-block:: bash

    # Update .po files for Russian
    sphinx-intl update -p _build/gettext -l ru

**Step 3: Translate new strings**

New entries with empty ``msgstr`` will appear in the ``.po`` files. These need to be translated.

**Step 4: Submit updates**

.. code-block:: bash

    git add locales/ru/
    git commit -m "docs: update Russian translation"
    git push

Checklist for Adding a New Localization
---------------------------------------

1. [ ] **Create structure**
   - [ ] Create ``.po`` files for all documents
   - [ ] Add build target to ``Makefile``

2. [ ] **Translation**
   - [ ] All strings are translated
   - [ ] Terminology is consistent
   - [ ] Code comments are translated

3. [ ] **Verification**
   - [ ] ``msgfmt`` produces no errors
   - [ ] Documentation builds without warnings
   - [ ] All links work
   - [ ] Formatting is preserved

4. [ ] **Submission**
   - [ ] Branch created with descriptive name
   - [ ] Commit with message ``docs: add [language] translation``
   - [ ] Pull Request created with translation status description

Useful Links
------------

*   `Sphinx Internationalization Guide <https://www.sphinx-doc.org/en/master/usage/advanced/intl.html>`_
*   `sphinx-intl Documentation <https://github.com/sphinx-doc/sphinx-intl>`_
*   `Poedit Editor <https://poedit.net/>`_
*   `GNU gettext Utilities <https://www.gnu.org/software/gettext/manual/>`_
*   `GitHub Issues for Localization Discussion <https://github.com/thunder-engine/thunder-doc/issues>`_

How to Become a Translator
--------------------------

1. **Choose a language** for translation (Russian, Chinese, German, etc.)
2. **Check** if there is already an active translation for that language
3. **Create an Issue** in the thunder-doc repository, stating your intention to translate
4. **Follow the instructions** above to create translation files
5. **Start with one document** — you don't have to translate everything at once
6. **Submit a PR** even with a partial translation — others can help continue

.. tip::
    Even translating one document is a valuable contribution! Don't be afraid to start small.