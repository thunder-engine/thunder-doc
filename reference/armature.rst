.. _api_Armature:
Armature Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_Armature_description:
Description
-----------

A bone management component.

An armature in Thunder Engine can be thought of as similar to the armature of a real skeleton, and just like a real skeleton. These bones can be moved around and anything that they are attached to or associated with will move and deform in a similar way. An armature uses the Transform component in a child object like a bone structure.



.. _api_Armature_public:
Public Methods
--------------

+-------------------------+------------------------------------------------------------+
|                         | :ref:`Armature<api_Armature_Armature>` ()                  |
+-------------------------+------------------------------------------------------------+
|                         | :ref:`~Armature<api_Armature_~Armature>` ()                |
+-------------------------+------------------------------------------------------------+
| :ref:`Pose<api_Pose>` * | :ref:`bindPose<api_Armature_bindPose>` () const            |
+-------------------------+------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setBindPose<api_Armature_setBindPose>` (Pose * pose) |
+-------------------------+------------------------------------------------------------+



.. _api_Armature_static:
Static Methods
--------------

+-------------------------------------------------------------------+-----------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Armature_methods>` ()       |
+-------------------------------------------------------------------+-----------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Armature_properties>` () |
+-------------------------------------------------------------------+-----------------------------------------------+

.. _api_Armature_methods:
Methods Description
-------------------

.. _api_Armature_Armature:

**Armature::Armature** ()

Default constructs an instance of Armature.

----

.. _api_Armature_~Armature:

**Armature::~Armature** ()

Destroys the instance of Armature. The destructor is virtual.

----

.. _api_Armature_bindPose:

:ref:`Pose<api_Pose>` * **Armature::bindPose** () const

Returns a bind pose of the bone structure.

**See also** setBindPose().

----

.. _api_Armature_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Armature::methods** ()

----

.. _api_Armature_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Armature::properties** ()

----

.. _api_Armature_setBindPose:

:ref:`void<api_void>`  **Armature::setBindPose** (:ref:`Pose<api_Pose>` * *pose*)

Sets a bind (initial) *pose* of the bone structure.

**See also** bindPose().

----


