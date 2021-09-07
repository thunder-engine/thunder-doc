.. _api_MetaMethod:
MetaMethod Class
================

Inherited: None

.. _api_MetaMethod_description:
Description
-----------

The MetaMethod provides an interface to retrieve information about object method at runtime.

This class is a part of Object-Introspection-Mechanism. MetaMethod provides information about one particular class method. Developers are able to retrieve information about method arguments, return types and etc.

To make methods visible in introspection mechanism, developers must declare those under A_METHODS() macro.



.. _api_MetaMethod_public:
Public Methods
--------------

+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                                               | :ref:`MetaMethod<api_MetaMethod_MetaMethod>` (const MetaMethod::Table * table)                                     |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                         :ref:`bool<api_bool>` | :ref:`invoke<api_MetaMethod_invoke>` (void * object, Variant & returnValue, int  argc, const Variant * args) const |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                         :ref:`bool<api_bool>` | :ref:`isValid<api_MetaMethod_isValid>` () const                                                                    |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                           :ref:`const char<api_const char>` * | :ref:`name<api_MetaMethod_name>` () const                                                                          |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                           :ref:`int<api_int>` | :ref:`parameterCount<api_MetaMethod_parameterCount>` () const                                                      |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                 :ref:`MetaType<api_MetaType>` | :ref:`parameterType<api_MetaMethod_parameterType>` (int  index) const                                              |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                                 :ref:`MetaType<api_MetaType>` | :ref:`returnType<api_MetaMethod_returnType>` () const                                                              |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                           :ref:`std::string<api_std::string>` | :ref:`signature<api_MetaMethod_signature>` () const                                                                |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
| :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`table<api_MetaMethod_table>` () const                                                                        |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+
|     :ref:`MetaMethod::MethodType<api_MetaMethod::MethodType>` | :ref:`type<api_MetaMethod_type>` () const                                                                          |
+---------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+

.. _api_MetaMethod_enums:
Public Enums
--------------

.. _api_MetaMethod_MethodType:
**enum MetaMethod::MethodType**

This enum defines base method types.

+--------------------+-------+--------------------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                                |
+--------------------+-------+--------------------------------------------------------------------------------------------+
| MetaMethod::Method | 0     | Standard method can be invoked. Used for general porposes.                                 |
+--------------------+-------+--------------------------------------------------------------------------------------------+
| MetaMethod::Signal | 1     | Method without impelementation can't be invoked. Used for Signals and Slots mechanism.     |
+--------------------+-------+--------------------------------------------------------------------------------------------+
|   MetaMethod::Slot | 2     | Very similar to A_METHOD but with special flag to be used for Signals and Slots mechanism. |
+--------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_MetaMethod_static:
Static Methods
--------------

None

.. _api_MetaMethod_methods:
Methods Description
-------------------

.. _api_MetaMethod_MetaMethod:

**MetaMethod::MetaMethod** (:ref:`MetaMethod::Table<api_MetaMethod::Table>` * *table*)

Constructs MetaMethod object which will contain information provided in a *table*.

----

.. _api_MetaMethod_invoke:

:ref:`bool<api_bool>`  **MetaMethod::invoke** (:ref:`void<api_void>` * *object*, :ref:`Variant<api_Variant>` & *returnValue*, :ref:`int<api_int>`  *argc*, :ref:`Variant<api_Variant>` * *args*) const

Calls current method for *object*. Function recieves an argument count in *argc* parameter and *args* array. Function is able to return the result of method invocation in *returnValue*.

Return true on succssed; otherwise returns false.

**Note:** Function checks if current method can be invoked.

----

.. _api_MetaMethod_isValid:

:ref:`bool<api_bool>`  **MetaMethod::isValid** () const

Returns true if method is valid; otherwise returns false.

----

.. _api_MetaMethod_name:

:ref:`const char<api_const char>` * **MetaMethod::name** () const

Returns a name of method.

----

.. _api_MetaMethod_parameterCount:

:ref:`int<api_int>`  **MetaMethod::parameterCount** () const

Returns a parameter count of method.

----

.. _api_MetaMethod_parameterType:

:ref:`MetaType<api_MetaType>`  **MetaMethod::parameterType** (:ref:`int<api_int>`  *index*) const

Returns the type of parameter at *index* position.

----

.. _api_MetaMethod_returnType:

:ref:`MetaType<api_MetaType>`  **MetaMethod::returnType** () const

Returns a return type of method.

----

.. _api_MetaMethod_signature:

:ref:`std::string<api_std::string>`  **MetaMethod::signature** () const

Returns method signature in text format.

----

.. _api_MetaMethod_table:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **MetaMethod::table** () const

Returns method information table.

----

.. _api_MetaMethod_type:

:ref:`MetaMethod::MethodType<api_MetaMethod::MethodType>`  **MetaMethod::type** () const

Returns a type of method.

----


