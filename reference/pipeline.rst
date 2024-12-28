.. _api_Pipeline:

Pipeline
========

Inherited: None

.. _api_Pipeline_description:

Description
-----------

The Pipeline class allows users to manage render tasks and their connections within a pipeline. Users can query information about render tasks, their names, and links between them. The class also provides methods for loading and saving user-specific data related to the pipeline.



.. _api_Pipeline_public:

Public Methods
--------------

+--------------------------------------------+---------------------------------------------------------------------------+
|  :ref:`Pipeline::Link<api_Pipeline::Link>` | :ref:`renderTaskLink<api_Pipeline_renderTaskLink>` (int  index) const     |
+--------------------------------------------+---------------------------------------------------------------------------+
|                                std::string | :ref:`renderTaskName<api_Pipeline_renderTaskName>` (int  index) const     |
+--------------------------------------------+---------------------------------------------------------------------------+
|                                        int | :ref:`renderTasksCount<api_Pipeline_renderTasksCount>` () const           |
+--------------------------------------------+---------------------------------------------------------------------------+
|                                        int | :ref:`renderTasksLinksCount<api_Pipeline_renderTasksLinksCount>` () const |
+--------------------------------------------+---------------------------------------------------------------------------+



.. _api_Pipeline_static:

Static Methods
--------------

None

.. _api_Pipeline_methods:

Methods Description
-------------------

.. _api_Pipeline_renderTaskLink:

 :ref:`Pipeline::Link<api_Pipeline::Link>`  **Pipeline::renderTaskLink** (int  *index*) const

Returns the link information for the render task at the specified *index*.

----

.. _api_Pipeline_renderTaskName:

 std::string **Pipeline::renderTaskName** (int  *index*) const

Returns the name of the render task at the specified *index*.

----

.. _api_Pipeline_renderTasksCount:

 int **Pipeline::renderTasksCount** () const

Returns the number of render tasks in the pipeline.

----

.. _api_Pipeline_renderTasksLinksCount:

 int **Pipeline::renderTasksLinksCount** () const

Returns the number of links between render tasks in the pipeline.


