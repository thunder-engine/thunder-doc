.. _api_ProcessEnvironment:

ProcessEnvironment
==================

Inherited: None

.. _api_ProcessEnvironment_description:

Description
-----------



.. _api_ProcessEnvironment_public:

Public Methods
--------------

+---------------------------------------------------------+------------------------------------------------------------------------------------------------+
| const std::map<TString, :ref:`TString><api_TString>>` & | :ref:`envVars<api_ProcessEnvironment_b873fa60>` () const                                       |
+---------------------------------------------------------+------------------------------------------------------------------------------------------------+
|                                                    void | :ref:`insert<api_ProcessEnvironment_0ba3127f>` (const TString & key, const TString & variable) |
+---------------------------------------------------------+------------------------------------------------------------------------------------------------+
|                             :ref:`TString<api_TString>` | :ref:`value<api_ProcessEnvironment_d927bf3a>` (const TString & key) const                      |
+---------------------------------------------------------+------------------------------------------------------------------------------------------------+
|     :ref:`ProcessEnvironment<api_ProcessEnvironment>` & | :ref:`operator=<api_ProcessEnvironment_b3f08679>` (const ProcessEnvironment & copy)            |
+---------------------------------------------------------+------------------------------------------------------------------------------------------------+



.. _api_ProcessEnvironment_static:

Static Methods
--------------

+----------------------------------------------------+--------------------------------------------------------------+
|  :ref:`ProcessEnvironment<api_ProcessEnvironment>` | :ref:`systemEnvironment<api_ProcessEnvironment_a1e9083d>` () |
+----------------------------------------------------+--------------------------------------------------------------+

.. _api_ProcessEnvironment_methods:

Methods Description
-------------------

.. _api_ProcessEnvironment_b873fa60:

const std::map<TString, :ref:`TString><api_TString>>` & **ProcessEnvironment::envVars** () const

Access the underlying map of environment variables.

----

.. _api_ProcessEnvironment_0ba3127f:

 void **ProcessEnvironment::insert** (:ref:`TString<api_TString>` & *key*, :ref:`TString<api_TString>` & *variable*)

Insert or update an environment variable.

On Windows the *key* is normalized to upper-case prior to insertion.

----

.. _api_ProcessEnvironment_a1e9083d:

 :ref:`ProcessEnvironment<api_ProcessEnvironment>`  **ProcessEnvironment::systemEnvironment** ()

Create a ProcessEnvironment populated from the current system environment.

On Windows reads the wide-character environment block returned by `GetEnvironmentStringsW()`. On POSIX platforms it reads entries from the global `environ` pointer.

----

.. _api_ProcessEnvironment_d927bf3a:

 :ref:`TString<api_TString>`  **ProcessEnvironment::value** (:ref:`TString<api_TString>` & *key*) const

Return the value for *key* or an empty string if not found.

----

.. _api_ProcessEnvironment_b3f08679:

 :ref:`ProcessEnvironment<api_ProcessEnvironment>` & **ProcessEnvironment::operator=** (:ref:`ProcessEnvironment<api_ProcessEnvironment>` & *copy*)

Copy-assign environment variables from another instance.

Performs a deep *copy* of the internal environment variable map.


