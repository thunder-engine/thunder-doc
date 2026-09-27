.. _api_Armature:

Armature
========

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_Armature_description:

Description
-----------

An armature in Thunder Engine can be thought of as similar to the armature of a real skeleton, and just like a real skeleton. These bones can be moved around and anything that they are attached to or associated with will move and deform in a similar way. An armature uses the Transform component in a child object like a bone structure.



.. _api_Armature_public:

Public Methods
--------------

+--------------------------+----------------------------------------------------------------------------+
|                     void | :ref:`addInstance<api_Armature_e06b7c5f>` (MaterialInstance * instance)    |
+--------------------------+----------------------------------------------------------------------------+
|  :ref:`Pose<api_Pose>` * | :ref:`bindPose<api_Armature_b0846c9e>` () const                            |
+--------------------------+----------------------------------------------------------------------------+
|                     void | :ref:`removeInstance<api_Armature_4e6381a5>` (MaterialInstance * instance) |
+--------------------------+----------------------------------------------------------------------------+
|                     void | :ref:`setBindPose<api_Armature_42d96e38>` (Pose * pose)                    |
+--------------------------+----------------------------------------------------------------------------+



.. _api_Armature_static:

Static Methods
--------------

None

.. _api_Armature_methods:

Methods Description
-------------------

.. _api_Armature_e06b7c5f:

 void **Armature::addInstance** (:ref:`MaterialInstance<api_MaterialInstance>` * *instance*)

Add material *instance* to upload updated skeletal data to GPU

----

.. _api_Armature_b0846c9e:

 :ref:`Pose<api_Pose>` * **Armature::bindPose** () const

Returns a bind pose of the bone structure.

**See also** setBindPose().

----

.. _api_Armature_4e6381a5:

 void **Armature::removeInstance** (:ref:`MaterialInstance<api_MaterialInstance>` * *instance*)

Remove material *instance* to stop uploading data to GPU

----

.. _api_Armature_42d96e38:

 void **Armature::setBindPose** (:ref:`Pose<api_Pose>` * *pose*)

Sets a bind (initial) *pose* of the bone structure.

**See also** bindPose().


