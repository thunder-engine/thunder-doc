.. _api_Translator:

Translator Class
================

Inherited: :doc:`Resource<api_Resource>`

.. _api_Translator_description:

Description
-----------



.. _api_Translator_public:

Public Methods
--------------

+--------------+------------------------------------------------------------------------------------------------------+
|         void | :ref:`setPair<api_Translator_setPair>` (const std::string & source, const std::string & translation) |
+--------------+------------------------------------------------------------------------------------------------------+
|  std::string | :ref:`translate<api_Translator_translate>` (const std::string & source) const                        |
+--------------+------------------------------------------------------------------------------------------------------+



.. _api_Translator_static:

Static Methods
--------------

None

.. _api_Translator_methods:

Methods Description
-------------------

.. _api_Translator_setPair:

 void **Translator::setPair** (std::string & *source*, std::string & *translation*)

Sets new *translation* for the *source* string.

----

.. _api_Translator_translate:

 std::string **Translator::translate** (std::string & *source*) const

Returns the translated *source* string.


