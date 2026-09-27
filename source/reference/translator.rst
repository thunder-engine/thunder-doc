.. _api_Translator:

Translator
==========

Inherited: :ref:`Resource<api_Resource>`

.. _api_Translator_description:

Description
-----------



.. _api_Translator_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------------------------------+
|                         void | :ref:`setPair<api_Translator_327f481d>` (const TString & source, const TString & translation) |
+------------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`translate<api_Translator_e8a9c361>` (const TString & source) const                      |
+------------------------------+-----------------------------------------------------------------------------------------------+



.. _api_Translator_static:

Static Methods
--------------

None

.. _api_Translator_methods:

Methods Description
-------------------

.. _api_Translator_327f481d:

 void **Translator::setPair** (:ref:`TString<api_TString>` & *source*, :ref:`TString<api_TString>` & *translation*)

Sets new *translation* for the *source* string.

----

.. _api_Translator_e8a9c361:

 :ref:`TString<api_TString>`  **Translator::translate** (:ref:`TString<api_TString>` & *source*) const

Returns the translated *source* string.


