.. _api_Translator:
Translator Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Translator_description:
Description
-----------



.. _api_Translator_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setPair<api_Translator_setPair>` (const std::string & source, const std::string & translation) |
+-------------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`translate<api_Translator_translate>` (const std::string & source) const                        |
+-------------------------------------+------------------------------------------------------------------------------------------------------+



.. _api_Translator_static:
Static Methods
--------------

None

.. _api_Translator_methods:
Methods Description
-------------------

.. _api_Translator_setPair:

:ref:`void<api_void>`  **Translator::setPair** (:ref:`std::string<api_std::string>` & *source*, :ref:`std::string<api_std::string>` & *translation*)

Sets new *translation* for the *source* string.

----

.. _api_Translator_translate:

:ref:`std::string<api_std::string>`  **Translator::translate** (:ref:`std::string<api_std::string>` & *source*) const

Returns the translated *source* string.

----


